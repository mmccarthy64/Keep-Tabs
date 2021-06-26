import React, { Component } from 'react';
import BookForm from '../components/BookForm';
import Books from '../components/Books'
import { Route, Switch } from 'react-router';

class BooksContainer extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/library'>
                        < Books />
                    </Route>
                    <Route exact path='/new'>
                        < BookForm />
                    </Route>
                    <Route exact path='/search'>
                        {/* search GoogleBooks */}
                    </Route>
                </Switch>
            </div>
        );
    }
}

export default BooksContainer;
