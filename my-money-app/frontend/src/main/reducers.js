import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as toastrReducer} from 'react-redux-toastr';

import billingCycleReducer from '../billingCycle/reducer';
import dashBoardReducer from '../dashboard/reducer';
import tabReducer from '../common/tab/reducer';

const rootReducer = combineReducers({
    form: formReducer,
    toastr: toastrReducer,
    billingCycle: billingCycleReducer,
    dashboard: dashBoardReducer,
    tab: tabReducer,
});

export default rootReducer;
