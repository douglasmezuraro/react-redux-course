import { UPDATE_MIN, UPDATE_MAX } from './constants';

export const updateMin = min => (
    {
        type: UPDATE_MIN,
        payload: min,
    }
);

export const updateMax = max => (
    {
        type: UPDATE_MAX,
        payload: max,
    }
);
