import BooksContainer from "./containers/BooksContainer";
import NavBar from "./components/NavBar";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { Component } from "react";
import { connect } from "react-redux";
import { createBook, deleteBook, getBooks, loadGoogleResults } from './actions/books';

class App extends Component{

  componentDidMount(){
    this.props.getBooks()
  }
  render(){
    return (
      <div className="App">
        < Router >
          <NavBar />
          < BooksContainer
            createBook={this.props.createBook}
            books={this.props.books}
            deleteBook={this.props.deleteBook}
            search={this.props.search}/>
          {/* news */}
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
  // search: payload => dispatch(loadGoogleResults(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
