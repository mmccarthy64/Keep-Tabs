import React, { Component } from 'react';
import BookForm from '../components/BookForm';
import Books from '../components/Books'


class BooksContainer extends Component {

    render() {
        return (
            <div>
                < Books books={this.props.books} deleteBook={this.props.deleteBook} />
                < BookForm createBook={this.props.createBook} />
            </div>
        );
    }
}
export default BooksContainer;
