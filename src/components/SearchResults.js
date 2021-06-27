import React, { Component } from 'react';

class SearchResults extends Component {

    state = {
        results: []
    }

    render() {
        return (
            <div>
                <Result />
                
            </div>
        );
    }
}

export default SearchResults;
