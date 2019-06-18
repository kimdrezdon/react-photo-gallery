import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="main-nav">
            <ul>
                <li><NavLink to="/amalficoast">Amalfi Coast</NavLink></li>
                <li><NavLink to="/tulum">Tulum</NavLink></li>
                <li><NavLink to="/santorini">Santorini</NavLink></li>
            </ul>
        </nav>
    )
}

export default Nav;