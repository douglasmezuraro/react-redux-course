import React from 'react';
import { Link } from 'react-router';

const MenuItem = ({ path, icon, label }) => (
    <li>
        <Link to={path}>
            <i className={icon} />
            <span>{label}</span>
        </Link>
    </li>
);

export default MenuItem;
