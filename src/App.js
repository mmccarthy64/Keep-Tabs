
import NavBar from "./components/NavBar";
import {
  Route,
  Switch,
  BrowserRouter as Router,
} from "react-router-dom";
import { Component } from "react";
import { connect } from "react-redux";
import { createBook, deleteBook, getBooks, loadGoogleResults } from './actions/books';
import Books from "./components/Library/Books";
import BookForm from "./components/Library/BookForm";
import SearchContainer from "./containers/SearchContainer";

class App extends Component{

  componentDidMount(){
    this.props.getBooks()
  }
  render(){
    return (
      <div className="App">
        < Router >
          <NavBar />
          <Switch>
              <Route exact path='/library'>
                  < Books books={this.props.books} deleteBook={this.props.deleteBook} />
              </Route>
              <Route path='/search'>
                  <SearchContainer search={this.props.search} searchResults={this.props.searchResults}/>
              </Route>
              <Route path='/books/new'>
                  < BookForm createBook={this.props.createBook} />
              </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => ({ books: state.books, searchResults: state.searchResults })

const mapDispatchToProps = dispatch => ({
  createBook: book => dispatch(createBook(book)),
  getBooks: books => dispatch(getBooks(books)),
  deleteBook: id => dispatch(deleteBook(id)),
  search: payload => dispatch(loadGoogleResults(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
