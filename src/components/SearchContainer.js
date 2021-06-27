import React, { Component } from 'react';
import SearchResults from './SearchResults';
import SearchForm from './SearchForm';
import { connect } from 'react-redux';
import { loadGoogleResults } from '../actions/books';

class SearchContainer extends Component {
    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                <SearchForm dispatchSearch={this.props.dispatchSearch}/>
                <SearchResults />
            </div>
        );
    }
}

export default SearchContainer;
