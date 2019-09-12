import React from 'react';
import PropTypes from 'prop-types';
import './Checkbox.scss';

/**
 * Checkbox Component
 * @param {string} children - checkbox label/text
 * @param {string} name - checkbox name
 * @param {boolean} disabled - is checkbox disabled
 * @param {Object} rest - any other rect props
 * @returns {*}
 * @constructor
 */
const Checkbox = ({ children, name, disabled, ...rest }) => (
    <label className="checkbox" {...rest}>
        <input type="checkbox" name={name} disabled={disabled} />
        <span className="check-mark" />
        {children}
    </label>
);

Checkbox.propTypes = {
    children: PropTypes.string,
    name: PropTypes.string,
    disabled: PropTypes.bool
};

Checkbox.defaultProps = {
    disabled: false
};

export default Checkbox;
