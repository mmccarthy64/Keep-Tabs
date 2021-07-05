import React, { useState } from 'react';
import Book from './Book';
import '../../App.css';

const Books = (props) => {
    const [searchTerm, setSearchTerm] = useState('')
    const books = props.books.filter((book) => {
        if (searchTerm === ''){
            return book
        } else if ( book.title.toLowerCase().includes(searchTerm.toLowerCase()) || book.author.toLowerCase().includes(searchTerm.toLowerCase())){
            return book
        }
    }).map( book => 
        <Book key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            page_count={book.page_count}
            image={book.image}
            comments={props.comments}
            getComments={props.getComments}
            hideComments={props.hideComments}
            deleteBook={props.deleteBook}
        />)
    return (
        <>
            <div className='library-light'>
                <h1>My Library</h1>
                <input type='text' placeholder='Search library...' onChange={ (event) => setSearchTerm(event.target.value)} />
                <div className='grid'>
                    {books}
                </div>
            </div>
        </>
    );
}

export default Books;
