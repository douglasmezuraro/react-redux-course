import './Content.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from '../../views/examples/About';
import Home from '../../views/examples/Home';

const Content = () => (
    <main className='Content'>
        <Switch>
            <Route path='/about'>
                <About />
            </Route>
            <Route path='/home'>
                <Home />
            </Route>
        </Switch>
    </main>
);

export default Content;
