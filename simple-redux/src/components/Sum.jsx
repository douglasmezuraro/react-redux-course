import React from 'react';
import { connect } from 'react-redux';

import Card from './Card';

const Sum = props => {
    const { min, max } = props;
    const sum = parseInt(min) + parseInt(max);

    return (
        <Card red title='Soma dos Números'>
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong>{sum}</strong>
                </span>
            </div>
        </Card>
    );
};

const mapStateToProps = (state) => (
    {
        min: state.numbers.min,
        max: state.numbers.max,
    }
);

export default connect(mapStateToProps)(Sum);
