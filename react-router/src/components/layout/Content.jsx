import './Content.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from '../../views/examples/About';
import Home from '../../views/examples/Home';
import Param from '../../views/examples/Param';

const Content = () => (
    <main className='Content'>
        <Switch>
            <Route exact path='/'>
                <Home />
            </Route>
            <Route exact path='/about'>
                <About />
            </Route>
            <Route exact path='/param/:id'>
                <Param />
            </Route>
            <Route exact path='/param/:id'>
                <Param />
            </Route>
        </Switch>
    </main>
);

export default Content;
