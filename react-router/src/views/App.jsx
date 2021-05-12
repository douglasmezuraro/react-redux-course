import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Menu from '../components/layout/Menu';
import Content from '../components/layout/Content';

const App = () => (
    <div className='App'>
        <BrowserRouter>
            <Menu />
            <Content />
        </BrowserRouter>
    </div>
);

export default App;
