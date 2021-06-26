import React, { Component } from 'react';
import BookForm from '../components/BookForm';
import Books from '../components/Books'
import { Route, Switch } from 'react-router';
import { connect } from 'react-redux';
import { addBook, getBooks } from '../actions/books';

class BooksContainer extends Component {

    componentDidMount(){
        this.props.getBooks()
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/library'>
                        < Books books={this.props.books} />
                    </Route>
                    <Route exact path='/new'>
                        < BookForm addBook={this.props.addBook} />
                    </Route>
                    <Route exact path='/search'>
                        {/* search GoogleBooks */}
                    </Route>
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = state => ({ books: state.books })

const mapDispatchToProps = dispatch => ({
    addBook: book => dispatch(addBook(book)),
    getBooks: books => dispatch(getBooks(books))
})

export default connect(mapStateToProps, mapDispatchToProps)(BooksContainer);
