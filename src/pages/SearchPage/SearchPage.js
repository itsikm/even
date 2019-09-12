import React from 'react';
import SearchForm from '../../containers/SearchForm';
import SearchResults from '../../containers/SearchResults';
import { TITLE } from '../../constants';
import './SearchPage.scss';

/**
 * Search Page
 * @returns {*}
 * @constructor
 */
const SearchPage = () => (
    <div className="search-page">
        <div className="head">
            <h1>{TITLE}</h1>
        </div>
        <div className="wrapper">
            <SearchForm />
            <SearchResults />
        </div>
    </div>
);

export default SearchPage;
