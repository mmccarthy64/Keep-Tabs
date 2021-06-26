import React, { Component } from 'react';
import Book from './Book';

class Books extends Component {
    render() {
        const books = this.props.books.map( book => 
            <Book key={book.id}
                title={book.attributes.title}
                author={book.attributes.author}
                page_count={book.attributes.page_count}
                image={book.attributes.image}
            />)
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
