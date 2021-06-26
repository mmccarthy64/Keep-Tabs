import React, { Component } from 'react';

class Book extends Component {
 
    render() {
        const { title, author, page_count, image } = this.props
        return (
            <div>
                <h1>{title}</h1>
                <p>{author}</p>
                <p>{page_count}</p>
                <img src={image} alt='book-cover' />
            </div>
        );
    }
}

export default Book;
