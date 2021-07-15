import './Interval.css';

import React from 'react';
import { connect } from 'react-redux';

import Card from './Card';

const Interval = props => {
    const { min, max } = props;

    return (
        <Card blue title='Intervalo de Números'>
            <div className='Interval'>
                <span>
                    <strong>Mínimo:</strong>
                    <input readOnly type='number' step={1} value={min} />
                </span>
                <span>
                    <strong>Máximo:</strong>
                    <input readOnly type='number' step={1} value={max} />
                </span>
            </div>
        </Card>
    );
};

const mapStateToProps = state => (
    {
        min: state.numbers.min,
        max: state.numbers.max,
    }
);

export default connect(mapStateToProps)(Interval);
