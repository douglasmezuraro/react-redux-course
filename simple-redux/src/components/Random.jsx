import React from 'react';
import { connect } from 'react-redux';

import Card from './Card';

const Random = props => {
    const { min, max } = props;
    const random = parseInt(Math.random() * (max - min) + min);

    return (
        <Card green title='Sorteio de um Número'>
            <div>
                <span>
                    <span>Número: </span>
                    <strong>{random}</strong>
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

export default connect(mapStateToProps)(Random);
