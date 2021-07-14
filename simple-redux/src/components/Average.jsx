import React from 'react';

import Card from './Card';

const Average = props => (
    <Card purple title='Média dos Números'>
        <div>
            <span>
                <span>Resultado: </span>
                <strong>{(parseInt(props.max) + parseInt(props.min)) / 2}</strong>
            </span>
        </div>
    </Card>
);

export default Average;
