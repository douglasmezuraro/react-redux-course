import Axios from 'axios';
import Actions from './types'

const URL = 'http://localhost:3003/api/all';

export const addTodo = description => {
    return dispatch => {
        Axios.post(URL, { description })
            .then(response => dispatch({ type: Actions.ADD_TODO, payload: response.data }))
            .then(response => dispatch(search()));
    };
};

export const clearDescription = () => (
    {
        type: Actions.CLEAR_DESCRIPTION,
    }
);

export const search = () => (
    {
        type: Actions.SEARCH,
        payload: Axios.get(`${URL}?sort=-createdAt`),
    }
);

export const setDescription = event => (
    {
        type: Actions.SET_DESCRIPTION,
        payload: { description: event.target.value },
    }
);
