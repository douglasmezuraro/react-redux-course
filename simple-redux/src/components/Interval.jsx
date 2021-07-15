import './Interval.css';

import React from 'react';
import { connect } from 'react-redux';

import Card from './Card';
import { updateMin, updateMax } from '../store/actions/numbers';

const Interval = props => {
    const { min, max } = props;

    return (
        <Card blue title='Intervalo de Números'>
            <div className='Interval'>
                <span>
                    <strong>Mínimo:</strong>
                    <input type='number' step={1} value={min} onChange={e => props.onUpdateMin(+e.target.value)} />
                </span>
                <span>
                    <strong>Máximo:</strong>
                    <input type='number' step={1} value={max} onChange={e => props.onUpdateMax(+e.target.value)} />
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

const mapDispatchToProps = dispatch => (
    {
        onUpdateMin(min) {
            dispatch(updateMin(min));
        },
        onUpdateMax(max) {
            dispatch(updateMax(max));
        },
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(Interval);
