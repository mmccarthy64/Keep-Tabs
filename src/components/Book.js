import React, { Component } from 'react';

class Book extends Component {
 
    render() {
        const { title, author, page_count, image } = this.props
        return (
            <div>
                <div className="card card-inverse card-success card-primary mb-3 text-center">
                    <div className="card-block">
                        <blockquote className="card-blockquote">
                        <h2>{title}</h2>
                        <p>{page_count}</p>
                        <img src={image} alt='book-cover' />
                        <footer>- author <cite title="Source Title">{author}</cite></footer>
                        </blockquote>
                    </div>
                    <div className="float-right">
                        <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Book;
