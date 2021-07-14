import React from 'react';

import Card from './Card';

const Sum = props => (
    <Card red title='Soma dos Números'>
        <div>
            <span>
                <span>Resultado: </span>
                <strong>{parseInt(props.min) + parseInt(props.max)}</strong>
            </span>
        </div>
    </Card>
);

export default Sum;
