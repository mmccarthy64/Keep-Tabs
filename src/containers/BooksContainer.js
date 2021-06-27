import React, { Component } from 'react';
import BookForm from '../components/BookForm';
import Books from '../components/Books'
import { Route, Switch } from 'react-router';
import { connect } from 'react-redux';
import SearchContainer from '../components/SearchContainer';

class BooksContainer extends Component {

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/library'>
                        < Books books={this.props.books} deleteBook={this.props.deleteBook} />
                    </Route>
                    <Route path='/books/new'>
                        < BookForm createBook={this.props.createBook} />
                    </Route>
                    <Route path='/search'>
                        <SearchContainer />
                    </Route>
                </Switch>
            </div>
        );
    }
}

export default connect()(BooksContainer);
