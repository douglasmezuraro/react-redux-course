import NumberReducer from '../reducers/number';
import UserReducer from '../reducers/user';

const Reducer = (state, action) => {
    let newState = NumberReducer(state, action);
    return UserReducer(newState, action);
};

export default Reducer;
