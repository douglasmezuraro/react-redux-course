import Axios from 'axios';

import { SEARCH, SET_DESCRIPTION } from './types'

const URL = 'http://localhost:3003/api/all';

export const search = () => (
    {
        type: SEARCH,
        payload: Axios.get(`${URL}?sort=-createdAt`),
    }
);

export const setDescription = event => (
    {
        type: SET_DESCRIPTION,
        payload: { description: event.target.value },
    }
);
