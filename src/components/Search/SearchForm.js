import React, { Component } from 'react';
import { Button, Form, Card } from 'react-bootstrap';

class SearchForm extends Component {

    state = {
        search: ''
    }

    handleOnChange = e => {
        this.setState({
            search: e.target.value
        })
    }

    handleOnSubmit = e => {
        e.preventDefault()
        if(this.state.search !== ''){
            this.searchGoogle(this.state.search)
            this.setState({
                search: ''
            })
        } else {
            alert("Search cannot be empty!")
        }
    }

    searchGoogle = (search) => {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=${process.env.REACT_APP_GOOGLE_BOOKS_API}`)
        .then(response => response.json())
        .then(results => this.mapGoogleResults(results))
    }

    mapGoogleResults = results => {
        const bookResults = results.items
        console.log(bookResults)
        const booksSearchResults = []
            for (let i = 0; i < bookResults.length; i++){
                let attributes = bookResults[i].volumeInfo
                booksSearchResults.push({
                    tempId: i, 
                    title: attributes.title,
                    author: Array.isArray(attributes.authors) ? attributes.authors[0] : attributes.authors,
                    page_count: attributes.pageCount,
                    image: attributes.imageLinks !== undefined ? attributes.imageLinks.thumbnail : 'https://islandpress.org/sites/default/files/default_book_cover_2015.jpg'
                })
            }
            this.props.search(booksSearchResults)
    }

    render() {
        return (
            <div>
                <Card>
                    <Card.Body>
                        <h1 >Search Google Books</h1>
                        <Form onSubmit={this.handleOnSubmit}>
                            <Form.Group  controlId='formSearch'>
                                <input type='text'
                                    value={this.state.search}
                                    placeholder='Enter book keyword...'
                                    name='search'
                                    onChange={this.handleOnChange}/>
                            </Form.Group>
                            <Button variant="primary" type="submit" className='m-3'>
                                Search
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}
export default SearchForm;
