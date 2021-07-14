import './App.css';

import React, { useState } from 'react';

import Average from './components/Average';
import Interval from './components/Interval';
import Random from './components/Random';
import Sum from './components/Sum';

const App = () => {

    const [min, setMin] = useState(0);
    const [max, setMax] = useState(10);

    const onChangeMin = e => setMin(e.target.value);
    const onChangeMax = e => setMax(e.target.value);

    return (
        <div className='App'>
            <h1>Exercício React-Redux (Simples)</h1>
            <div>
                <div className='row'>
                    <Interval min={min} max={max} onChangeMin={onChangeMin} onChangeMax={onChangeMax} />
                </div>
                <div className='row'>
                    <Average min={min} max={max} />
                    <Sum min={min} max={max} />
                    <Random min={min} max={max} />
                </div>
            </div>
        </div>
    );
};

export default App;
