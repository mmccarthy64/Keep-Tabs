import React, { Component } from 'react';
import Result from './Result';

class SearchResults extends Component {
    render() {
        const results = this.props.results.map( result => <Result key={1} {...result} />)

        return (
            <div>
                {results}
            </div>
        );
    }
}

export default SearchResults;
