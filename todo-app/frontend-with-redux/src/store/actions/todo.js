import Axios from 'axios';
import Actions from './types'

const URL = 'http://localhost:3003/api/all';

export const addTodo = description => {
    return dispatch => {
        Axios.post(URL, { description })
            .then(response => dispatch({ type: Actions.ADD_TODO, payload: response.data }))
            .then(() => dispatch(search()));
    };
};

export const clearDescription = () => (
    {
        type: Actions.CLEAR_DESCRIPTION,
    }
);

export const markAsDone = todo => {
    return dispatch => {
        Axios.put(`${URL}/${todo._id}`, { ...todo, done: true, doneAt: Date.now() })
            .then(response => dispatch({ type: Actions.MARK_AS_DONE, payload: response.data }))
            .then(() => dispatch(search(todo.description)));
    };
};

export const markAsPending = todo => {
    return dispatch => {
        Axios.put(`${URL}/${todo._id}`, { ...todo, done: false, doneAt: null })
            .then(response => dispatch({ type: Actions.MARK_AS_PENDING, payload: response.data }))
            .then(() => dispatch(search(todo.description)));
    };
};

export const search = description => {
    const filter = description ? `&description__regex=/${description}/` : '';

    return {
        type: Actions.SEARCH,
        payload: Axios.get(`${URL}?sort=-createdAt?${filter}`),
    };
};

export const setDescription = event => (
    {
        type: Actions.SET_DESCRIPTION,
        payload: { description: event.target.value },
    }
);
