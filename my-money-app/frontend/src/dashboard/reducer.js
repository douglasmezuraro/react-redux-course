const INITIAL_STATE = {
    summary: {
        credit: 0.00,
        debt: 0.00,
    },
};

const dashBoardReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'BILLING_SUMMARY_FETCHED':
            return { ...state, summary: action.payload.data };
        default:
            return state;
    };
};

export default dashBoardReducer;
