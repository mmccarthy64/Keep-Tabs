import React, { Component } from 'react';
import Result from './Result';

class SearchResults extends Component {
    render() {
        const results = this.props.results.map( result => 
            <Result key={result.id}
                id={result.id}
                title={result.title}
                author={result.author}
                page_count={result.page_count}
                image={result.image}
                addBook={this.props.addBook}
            />)
        return (
            <div style={{ textAlign: 'center' }}>
                <h1>Results</h1>
                <div className='grid'>
                    {results}
                </div>
            </div>
        );
    }
}

export default SearchResults;
