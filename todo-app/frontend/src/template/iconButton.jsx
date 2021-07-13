import React from 'react';
import If from '../template/if';

const IconButton = props => (
    <If condition={props.show}>
        <button className={'btn btn-' + props.style} title={props.title} onClick={props.onClick}>
            <i className={'fa fa-' + props.icon} />
        </button>
    </If>
);

export default IconButton;
