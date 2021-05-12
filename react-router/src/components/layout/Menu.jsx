import './Menu.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => (
    <aside className='Menu'>
        <nav>
            <ul>
                <li>
                    <Link to='/home'>Início</Link>
                </li>
                <li>
                    <Link to='/about'>Sobre</Link>
                </li>
                <li>
                    <Link to='/param/123'>Parâmetro #1</Link>
                </li>
                <li>
                    <Link to='/param/abc'>Parâmetro #2</Link>
                </li>
            </ul>
        </nav>
    </aside>
);

export default Menu;
