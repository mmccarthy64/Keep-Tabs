import React, { Component } from 'react';
import BookForm from '../components/BookForm';
import Books from '../components/Books'
import { Route, Switch } from 'react-router';
import { connect } from 'react-redux';

class BooksContainer extends Component {

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/library'>
                        < Books books={this.props.books} />
                    </Route>
                    <Route exact path='/new'>
                        < BookForm createBook={this.props.createBook} />
                    </Route>
                    <Route exact path='/search'>
                        {/* search GoogleBooks */}
                    </Route>
                </Switch>
            </div>
        );
    }
}

export default connect()(BooksContainer);
