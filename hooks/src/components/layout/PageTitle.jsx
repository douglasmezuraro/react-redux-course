import './PageTitle.css';
import React from 'react';

const PageTitle = props => (
    <div>
        <div className={`PageTitle ${props.error ? 'error' : ''}`}>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
        <div>
            {props.children}
        </div>
    </div>
);

export default PageTitle;
