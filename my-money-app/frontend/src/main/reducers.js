import { combineReducers } from 'redux';

import billingCycleReducer from '../billingCycle/reducer';
import dashBoardReducer from '../dashboard/reducer';
import tabReducer from '../common/tab/reducer';

const rootReducer = combineReducers({
    billingCycle: billingCycleReducer,
    dashboard: dashBoardReducer,
    tab: tabReducer,
});

export default rootReducer;
