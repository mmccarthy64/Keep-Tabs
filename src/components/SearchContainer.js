import React, { Component } from 'react';
import SearchResults from './SearchResults';
import SearchForm from './SearchForm';
import { connect } from 'react-redux';

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


export default connect()(SearchContainer);
