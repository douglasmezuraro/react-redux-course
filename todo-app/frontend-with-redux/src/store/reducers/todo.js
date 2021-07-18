import Actions from '../actions/types';

const INITIAL_STATE = {
    description: '',
    data: [],
};

const todoReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Actions.ADD_TODO, Actions.CLEAR_DESCRIPTION:
            return { ...state, description: '' };
        case Actions.SEARCH:
            return { ...state, data: action.payload.data };
        case Actions.SET_DESCRIPTION:
            return { ...state, description: action.payload.description };
        default:
            return state;
    };
};

export default todoReducer;
