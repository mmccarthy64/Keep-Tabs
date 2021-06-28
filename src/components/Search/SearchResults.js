import React, { Component } from 'react';
import Result from './Result';

class SearchResults extends Component {
    render() {
        console.log(this.props)
        if(this.props.searchResults !== null){
            const results = this.props.searchResults.map( result => 
                <Result key={result.tempId}
                    id={result.tempId}
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
}

export default SearchResults;
