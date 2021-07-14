import './Interval.css';

import React from 'react';

import Card from './Card';

const Interval = props => (
    <Card blue title='Intervalo de Números'>
        <div className='Interval'>
            <span>
                <strong>Mínimo:</strong>
                <input type='number' step={1} value={props.min} onChange={e => props.onChangeMin(e)}/>
            </span>
            <span>
                <strong>Máximo:</strong>
                <input type='number' step={1} value={props.max} onChange={e => props.onChangeMax(e)} />
            </span>
        </div>
    </Card>
);

export default Interval;
