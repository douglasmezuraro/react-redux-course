import React from 'react';

import Card from './Card';

const Random = props => (
    <Card green title='Sorteio de um Número'>
        <div>
            <span>
                <span>Número: </span>
                <strong>{parseInt(Math.random() * (props.max - props.min) + props.min)}</strong>
            </span>
        </div>
    </Card>
);

export default Random;
