import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

/**
 * Button Component
 * @param {string} children - button text
 * @param {boolean} disabled - is button disabled
 * @param {Object} rest - any other rect props
 * @returns {*}
 * @constructor
 */
const Button = ({ children, disabled, ...rest }) => (
    <button className="button" disabled={disabled} {...rest}>
        {children}
    </button>
);

Button.propTypes = {
    children: PropTypes.string,
    disabled: PropTypes.bool
};

Button.defaultProps = {
    disabled: false
};

export default Button;
