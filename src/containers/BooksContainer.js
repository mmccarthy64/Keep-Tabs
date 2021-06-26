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
                        < Books />
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
    addBook: book => dispatch({ type: 'ADD_BOOK', payload: book })
})

export default connect(mapStateToProps, mapDispatchToProps)(BooksContainer);
