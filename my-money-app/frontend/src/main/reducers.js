import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import billingCycleReducer from '../billingCycle/reducer';
import dashBoardReducer from '../dashboard/reducer';
import tabReducer from '../common/tab/reducer';

const rootReducer = combineReducers({
    form: formReducer,
    billingCycle: billingCycleReducer,
    dashboard: dashBoardReducer,
    tab: tabReducer,
});

export default rootReducer;
