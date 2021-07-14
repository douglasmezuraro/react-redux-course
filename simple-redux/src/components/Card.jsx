import './Card.css'

import React from 'react';

const getColor = props => {
    if (props.blue) {
        return 'Blue';
    };

    if (props.green) {
        return 'Green';
    }

    if (props.purple) {
        return 'Purple';
    }

    if (props.red) {
        return 'Red';
    };

    return 'TODO';
};

const Card = props => (
    <div className={`Card ${getColor(props)}`} >
        <div className='Header'>
            <span className='Title'>
                {props.title}
            </span>
        </div>
        <div className='Content'>
            {props.chidren}
        </div>
    </div >
);

export default Card;
