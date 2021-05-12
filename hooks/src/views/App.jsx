import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Content from '../components/layout/Content';
import Menu from '../components/layout/Menu';

const App = () => (
    <div className='App'>
        <BrowserRouter>
            <Menu />
            <Content />
        </BrowserRouter>
    </div>
);

export default App;
