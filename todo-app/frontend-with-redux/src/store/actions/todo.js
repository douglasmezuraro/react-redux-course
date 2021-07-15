import { SET_DESCRIPTION } from './types'

export const setDescription = event => (
    {
        type: SET_DESCRIPTION,
        payload: { description: event.target.value },
    }
);
