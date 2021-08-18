import { combineReducers } from 'redux';

import dashBoardReducer from '../dashboard/reducer';

const rootReducer = combineReducers({
    dashboard: dashBoardReducer,
});

export default rootReducer;
