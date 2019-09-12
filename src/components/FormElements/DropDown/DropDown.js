import React from 'react';
import PropTypes from 'prop-types';
import './DropDown.scss';

/**
 * Drop Down Component
 * @param {string} label - dropdown label
 * @param {string} name - dropdown name
 * @param {Object} options - list of options
 * @param {string} value - field name to pick up the value for each option
 * @param {string} text - field name to pick up the text for each option
 * @param {string} selected - default value / selected value
 * @param {boolean} disabled - is dropdown disabled
 * @param {Object} rest - any other rect props
 * @returns {*}
 * @constructor
 */
const DropDown = ({ label, name, options, value, text, selected, disabled, ...rest }) => {
    /**
     * Render Options Sub-Component
     * @returns {*}
     * @constructor
     */
    const Options = () => {
        return options.map((option, i) => <option key={i} value={option[value]}>{option[text]}</option>);
    };

    return (
        <div className="drop-down">
            <label>{label}</label>
            <div className={`custom-select ${disabled ? ' disabled' : ''}`}>
                <select name={name} {...rest} value={selected} disabled={disabled}>
                    <Options />
                </select>
            </div>
        </div>
    );
};

DropDown.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    options: PropTypes.array,
    value: PropTypes.string,
    text: PropTypes.string,
    selected: PropTypes.string
};

DropDown.defaultProps = {
    options: [],
    value: 'key',
    text: 'name'
};

export default DropDown;
