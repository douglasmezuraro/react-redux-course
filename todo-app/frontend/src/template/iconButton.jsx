import React from 'react';

const IconButton = props => {
    if (props.hide) {
        return null;
    }
    else {
        return (
            <button className={'btn btn-' + props.style} onClick={props.onClick}>
                <i className={'fa fa-' + props.icon} />
            </button>
        );
    };
};

export default IconButton;
