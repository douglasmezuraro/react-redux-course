import React from 'react';

const MenuTree = ({ icon, label, children }) => (
    <li className='treeview'>
        <a href>
            <i className={icon} /> {label}
            <i className='fa fa-angle-left pull-right' />
        </a>
        <ul className='treeview-menu'>
            {children}
        </ul>
    </li>
);

export default MenuTree;
