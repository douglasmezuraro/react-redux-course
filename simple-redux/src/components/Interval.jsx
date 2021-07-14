import './Interval.css';

import React from 'react';

import Card from './Card';

const Interval = () => (
    <Card blue title='Intervalo de Números'>
        <div className='Interval'>
            <span>
                <strong>Mínimo:</strong>
                <input readOnly type='number' value={0} />
            </span>
            <span>
                <strong>Máximo:</strong>
                <input readOnly type='number' value={10} />
            </span>
        </div>
    </Card>
);

export default Interval;
