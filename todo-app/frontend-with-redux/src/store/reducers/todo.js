import { SEARCH, SET_DESCRIPTION } from '../actions/types';

const INITIAL_STATE = {
    description: 'ler livro',
    data: [
        {
            _id: 1,
            description: 'pagar fatura do cartão',
            done: true,
        },
        {
            _id: 2,
            description: 'reunião com a equipe às 10:00',
            done: false,
        },
        {
            _id: 3,
            description: 'consulta médica terça depois do almoço',
            done: false,
        },
    ],
};

const todoReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SEARCH:
            return { ...state, data: action.payload.data };
        case SET_DESCRIPTION:
            return { ...state, description: action.payload.description };
        default:
            return state;
    };
};

export default todoReducer;
