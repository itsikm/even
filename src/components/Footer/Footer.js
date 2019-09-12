import React from 'react';
import { COPYRIGHT } from '../../constants';
import './Footer.scss';

/**
 * Footer Component
 * @returns {*}
 * @constructor
 */
const Footer = () => (
    <div className="footer">
        <div className="wrapper">
            {COPYRIGHT}
        </div>
    </div>
);

export default Footer;
