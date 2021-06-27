import React, { Component } from 'react';
import SearchResults from './SearchResults';
import SearchForm from './SearchForm';
import { connect } from 'react-redux';

class SearchContainer extends Component {
    render() {
        console.log(this.props)
        return (
            <div style={{ textAlign: 'center' }}>
                <SearchForm search={this.props.search}/>
                <SearchResults results={this.props.results}/>
            </div>
        );
    }
}

export default SearchContainer;
