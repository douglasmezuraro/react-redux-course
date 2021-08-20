import { combineReducers } from 'redux';

import dashBoardReducer from '../dashboard/reducer';
import tabReducer from '../common/tab/reducer';

const rootReducer = combineReducers({
    dashboard: dashBoardReducer,
    tab: tabReducer,
});

export default rootReducer;
