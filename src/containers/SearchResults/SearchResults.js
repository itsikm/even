import React, { Component } from 'react';
import { connect } from 'react-redux';
import RepositoryItem from '../../components/RepositoryItem';
import { NO_RESULTS, SEARCH_NOTE, SEARCH_RESULTS } from '../../constants';
import './SearchResults.scss';

/**
 * Search Result Container
 */
class SearchResults extends Component {

    /**
     * Results Sub-Component
     * @returns {null|*}
     * @constructor
     */
    Results = () => {
        const { results } = this.props;
        if (results) {
            return results.map((item, i) => <RepositoryItem key={i} {...item} />);
        }
        return null;
    };

    /**
     * Result Note Sub-Component
     * @returns {string}
     * @constructor
     */
    ResultNote = () => {
        const { results } = this.props;

        if (!results) {
            return SEARCH_NOTE;
        }

        return !results.length ? NO_RESULTS : SEARCH_RESULTS;
    };

    render() {
        const { Results, ResultNote } = this;
        return (
            <div className="search-result">
                <div className="head">
                    <ResultNote />
                </div>
                <div className="results">
                    <Results />
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ results }) => ({
    results
});

export default connect(mapStateToProps)(SearchResults);
