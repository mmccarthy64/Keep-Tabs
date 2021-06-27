import React, { Component } from 'react';
import Book from './Book';


class Books extends Component {
    render() {
        const books = this.props.books.map( book => 
            <Book key={book.id}
                id={book.id}
                title={book.title}
                author={book.author}
                page_count={book.page_count}
                image={book.image}
                deleteBook={this.props.deleteBook}
            />)
            this.props.books.map( book => console.log(book.id))
        return (
            <div>
                <h1>Library</h1>
                <div className='grid'>
                    {books}
                </div>
            </div>
        );
    }
}

export default Books;
