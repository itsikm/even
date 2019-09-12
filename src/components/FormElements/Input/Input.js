import React from 'react';
import PropTypes from 'prop-types';
import './Input.scss';

/**
 * Input Component
 * @param {string} label - input label
 * @param {string} type  - input type
 * @param {string} name  - input name
 * @param {string} value - input value
 * @param {boolean} disabled - is input disabled
 * @param {string} error - input error
 * @param {Object} rest  - any other rect props
 * @returns {*}
 * @constructor
 */
const Input = ({ label, type, name, value, disabled, error, ...rest }) => {
    /**
     * Render Input Error Sub-Component
     * @returns {string|*}
     * @constructor
     */
    const Error = () => {
        return error && <div className="error">{error}</div>;
    };

    return (
        <div className="input">
            <label>{label}</label>
            <input type={type} name={name} value={value} disabled={disabled} {...rest} />
            <Error />
        </div>
    );
};

Input.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func
};

Input.defaultProps = {
    type: 'text',
    value: '',
    onChange: () => {},
    error: null
};

export default Input;
