import NavBar from "./components/NavBar";
import {
  Route,
  Switch,
  BrowserRouter as Router,
} from "react-router-dom";
import { Component } from "react";
import { connect } from "react-redux";
import { createBook, deleteBook, getBooks, loadGoogleResults, getComments, hideComments } from './actions/books';
import Books from "./components/Library/Books";
import BookForm from "./components/Library/BookForm";
import SearchContainer from "./containers/SearchContainer";

class Dashboard extends Component{

  componentDidMount(){
      this.props.getBooks(this.props.user.id)
  }

  handleOnLogoutClick = () => {
    this.props.handleLogoutSession()
  }

  render(){
    return (
      <div className="Dashboard">
        < Router >
          <NavBar 
            handleLogoutClick={this.handleOnLogoutClick}
            user={this.props.user}/>
          <Switch>
              <Route path='/library'>
                  < Books 
                    books={this.props.books}
                    deleteBook={this.props.deleteBook}
                    comments={this.props.comments}
                    getComments={this.props.getComments}
                    hideComments={this.props.hideComments}/>
              </Route>
              <Route path='/search'>
                  <SearchContainer 
                    user_id={this.props.user.id}
                    search={this.props.search}
                    searchResults={this.props.searchResults}
                    createBook={this.props.createBook}/>
              </Route>
              <Route path='/books/new'>
                  < BookForm 
                    createBook={this.props.createBook}
                    user_id={this.props.user.id} />
              </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => ({ books: state.books, searchResults: state.searchResults, comments: state.comments })

const mapDispatchToProps = dispatch => ({
  createBook: book => dispatch(createBook(book)),
  getBooks: books => dispatch(getBooks(books)),
  deleteBook: id => dispatch(deleteBook(id)),
  search: payload => dispatch(loadGoogleResults(payload)),
  getComments: id => dispatch(getComments(id)),
  hideComments: id => dispatch(hideComments(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
