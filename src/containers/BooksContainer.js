import React, { Component } from 'react';
import BookForm from '../components/BookForm';
import Books from '../components/Books'
import { Route } from 'react-router';

class BooksContainer extends Component {
    render() {
        return (
            <div>
                <Route exact path='/library'>
                    < Books />
                </Route>
                <Route exact path='/new'>
                    < BookForm />
                </Route>
                {/* search GoogleBooks */}
            </div>
        );
    }
}

export default BooksContainer;
