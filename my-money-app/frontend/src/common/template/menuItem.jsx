import React from 'react';

const MenuItem = ({ path, icon, label }) => (
    <li>
        <a href={path}>
            <i className={icon} /> {label}
        </a>
    </li>
);

export default MenuItem;
