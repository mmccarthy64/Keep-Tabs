import React, { Component } from 'react';
import SearchResults from './SearchResults';
import SearchForm from './SearchForm';

class SearchContainer extends Component {
    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                <SearchForm />
                <SearchResults />
            </div>
        );
    }
}

export default SearchContainer;
