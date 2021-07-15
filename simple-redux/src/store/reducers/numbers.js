import { UPDATE_MIN, UPDATE_MAX } from '../actions/types';

const INITIAL_STATE = { min: 0, max: 10 };

const numbers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UPDATE_MIN: 
            return { ...state, min: action.payload };
        case UPDATE_MAX: 
            return { ...state, max: action.payload };
        default: 
            return state;
    };
};

export default numbers;
