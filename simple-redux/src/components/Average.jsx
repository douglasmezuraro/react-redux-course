import React from 'react';
import { connect } from 'react-redux';

import Card from './Card';

const Average = props => {
    const { min, max } = props;
    const average = (parseInt(min) + parseInt(max)) / 2;

    return (
        <Card purple title='Média dos Números'>
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong>{average}</strong>
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

export default connect(mapStateToProps)(Average);
