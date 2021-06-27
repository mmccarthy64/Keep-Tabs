import React, { Component } from 'react';
import SearchResults from './SearchResults';
import { Button } from 'react-bootstrap';

class SearchContainer extends Component {
    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                <h1 >Search Google Books</h1>
                <Button />
                <SearchResults />
            </div>
        );
    }
}

export default SearchContainer;
