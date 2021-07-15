import React from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router';

import Todo from '../todo/todo';
import About from '../about/about';

const Routes = () => (
    <Router history={hashHistory}>
        <Route path='/todos' component={Todo} />
        <Route path='/sobre' component={About} />
        <Redirect path='*' to='/todos' />
    </Router>
);

export default Routes;
