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
        return false
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
            <div className='library'>
                <h1>My Library</h1>
                <input type='text' placeholder='Search library...' onChange={ (event) => setSearchTerm(event.target.value)} />
                <div className='grid'>
                    {books.length > 0 ? books : 
                        <h1 style={{color:'#FF0000'}}>Your library is empty: <br/>Search for books to add or add your own books above</h1>}
                </div>
            </div>
        </>
    );
}

export default Books;
