import Axios from 'axios';
import Actions from './types';

const URL = 'http://localhost:3003/api/all';

export const addTodo = description => {
    return dispatch =>
        Axios.post(URL, { description }).then(() => dispatch(clearDescription())).then(() => dispatch(search()));
};

export const clearDescription = () => (
    [
        {
            type: Actions.CLEAR_DESCRIPTION,
        },
        search(),
    ]
);

export const markAsDone = todo => {
    return dispatch =>
        Axios.put(`${URL}/${todo._id}`, { ...todo, done: true, doneAt: Date.now() }).then(() => dispatch(search()));
};

export const markAsPending = todo => {
    return dispatch =>
        Axios.put(`${URL}/${todo._id}`, { ...todo, done: false, doneAt: null }).then(() => dispatch(search()));
};

export const removeTodo = todo => {
    return dispatch =>
        Axios.delete(`${URL}/${todo._id}`).then(() => dispatch(search()));
};

export const search = () => {
    return (dispatch, getState) => {
        const { description } = getState().todo;
        const filter = description ? `&description__regex=/${description}/` : '';

        Axios.get(`${URL}?sort=-createdAt?${filter}`)
            .then(response => dispatch({ type: Actions.SEARCH, payload: response.data }));
    };
};

export const setDescription = event => (
    {
        type: Actions.SET_DESCRIPTION,
        payload: { description: event.target.value },
    }
);
