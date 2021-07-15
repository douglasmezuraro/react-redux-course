import './Interval.css';

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Card from './Card';
import * as NumbersActions from '../store/actions/numbers';

const Interval = props => {
    const { min, updateMin, max, updateMax } = props;

    return (
        <Card blue title='Intervalo de Números'>
            <div className='Interval'>
                <span>
                    <strong>Mínimo:</strong>
                    <input type='number' step={1} value={min} onChange={e => updateMin(+e.target.value)} />
                </span>
                <span>
                    <strong>Máximo:</strong>
                    <input type='number' step={1} value={max} onChange={e => updateMax(+e.target.value)} />
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

const mapDispatchToProps = dispatch => bindActionCreators(NumbersActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Interval);
