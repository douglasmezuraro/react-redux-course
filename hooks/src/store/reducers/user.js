const UserReducer = (state, action) => {
    switch (action.type) {
        case 'login':
            return { ...state, user: action.payload.user };
        case 'logout':
            return { ...state, user: null };
        default:
            return state;
    };
};

export default UserReducer;
