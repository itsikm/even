import React from 'react';
import './RepositoryItem.scss';

/**
 * Repository Item Component
 * @param {string} full_name - repo name
 * @param {string} description - repo description
 * @param {string} license - repo license
 * @param {string} stargazers_count - repo stars
 * @param {boolean} fork - is forked?
 * @returns {*}
 * @constructor
 */
const RepositoryItem = ({ full_name, description, license, stargazers_count, fork }) => {
    /**
     * Forked Tag Sub-Component
     * @returns {boolean|*}
     * @constructor
     */
    const Forked = () => {
        return fork && <div className="fork">Forked</div>;
    };

    return (
        <div className="repository-item">
            <div className="meta">
                <Forked />
                <a href="#">{full_name}</a>
                <p>{description}</p>
            </div>
            <div className="column">
                <label>Stars:</label>
                <p>{stargazers_count}</p>
            </div>
            <div className="column">
                <label>License:</label>
                <p>{license ? license.name : 'N/A'}</p>
            </div>
        </div>
    );
};

export default RepositoryItem;
