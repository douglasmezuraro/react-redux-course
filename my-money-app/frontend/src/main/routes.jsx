import React from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router';

import BillingCycle from '../billingCycle/billingCycle';
import Dashboard from '../dashboard/dashboard';

const Routes = () => (
    <Router history={hashHistory}>
        <Route path='/' component={Dashboard} />
        <Route path='/billingCycles' component={BillingCycle} />
        <Redirect from='*' to='/' />
    </Router>
);

export default Routes;
