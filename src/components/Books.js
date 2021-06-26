import React, { Component } from 'react';
import Book from './Book';

class Books extends Component {
    render() {
        const books = this.props.books.map( book => 
            <Book key={book.id}
                title={book.title}
                author={book.author}
                page_count={book.page_count}
                image={book.image}
            />)
        return (
            <div style={{display: 'grid'}}>
                <h1>Library</h1>
                <div style={{ display: 'flex', flexDirection: 'row'}}>
                    {books}
                </div>
            </div>
        );
    }
}

export default Books;
