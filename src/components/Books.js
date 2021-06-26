import React, { Component } from 'react';
import Book from './Book';

class Books extends Component {
    render() {
        const books = this.props.books.map( book => <Book />)
        return (
            <div>
                <h1>Library</h1>
                <div>
                    {books}
                </div>
            </div>
        );
    }
}

export default Books;
