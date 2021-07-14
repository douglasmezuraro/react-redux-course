import './App.css';

import React from 'react';

import Average from './components/Average';
import Interval from './components/Interval';
import Random from './components/Random';
import Sum from './components/Sum';

const App = () => {
    return (
        <div className='App'>
            <h1>Exercício React-Redux (Simples)</h1>
            <div>
                <div className='row'>
                    <Interval />
                </div>
                <div className='row'>
                    <Average />
                    <Sum />
                    <Random />
                </div>
            </div>
        </div>
    );
};

export default App;
