import React from 'react';
import './Header.scss';
import logo from '../../assets/logo.png';

/**
 * Heade Component
 * @returns {*}
 * @constructor
 */
const Header = () => (
    <div className="header">
        <div className="wrapper">
            <img src={logo} alt="Even Logo" className="logo" />
        </div>
    </div>
);

export default Header;
