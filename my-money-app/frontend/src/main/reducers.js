import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    dashboard: () => ({ summary: { credit: 100.00, debt: 50.00 } }),
});

export default rootReducer;
