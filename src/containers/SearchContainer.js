import React, { Component } from 'react';
import SearchResults from '../components/Search/SearchResults';
import SearchForm from '../components/Search/SearchForm';

class SearchContainer extends Component {

    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                <SearchForm search={this.props.search}/>
                <SearchResults searchResults={this.props.searchResults}/>
            </div>
        );
    }
}

export default SearchContainer;
