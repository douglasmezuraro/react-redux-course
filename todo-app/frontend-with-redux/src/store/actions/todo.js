import Axios from 'axios';

import Actions from './types'

const URL = 'http://localhost:3003/api/all';

export const search = () => (
    {
        type: Actions.SEARCH,
        payload: Axios.get(`${URL}?sort=-createdAt`),
    }
);

export const clearDescription = () => (
    {
        type: Actions.CLEAR_DESCRIPTION,
    }
);

export const setDescription = event => (
    {
        type: Actions.SET_DESCRIPTION,
        payload: { description: event.target.value },
    }
);
