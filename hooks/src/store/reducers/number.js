const NumberReducer = (state, action) => {
    switch (action.type) {
        case 'add_2':
            return { ...state, number: state.number + 2 };
        case 'add_n':
            return { ...state, number: parseInt(state.number) + parseInt(action.payload.n) }
        case 'mult_7':
            return { ...state, number: state.number * 7 };
        case 'div_25':
            return { ...state, number: state.number / 25 };
        case 'parse_int':
            return { ...state, number: parseInt(state.number) };
        default:
            return state;
    };
};

export default NumberReducer;
