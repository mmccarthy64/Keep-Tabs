import React, { Component } from 'react';
import { Button, Form, Card } from 'react-bootstrap';
import { searchGoogle } from './GoogleBooks';

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
        // console.log(this.state.search)
        // searchGoogle(this.state.search)
        const result = this.searchGoogle(this.state.search)
        // this.props.search(this.state.search)
        this.setState({
            search: ''
        })
    }

    searchGoogle = (search) => {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=${process.env.REACT_APP_GOOGLE_BOOKS_API}`)
        .then(response => response.json())
        // .then(result => console.log(result))
        .then(results => this.mapGoogleResults(results))
    }

    mapGoogleResults = results => {
        const bookResults = results.items
        const booksSearchResults = []
        for (let i = 0; i < bookResults.length; i++){
            let attributes = bookResults[i].volumeInfo
            booksSearchResults.push({
                tempId: i, 
                title: attributes.title,
                author: attributes.authors[0],
                page_count: attributes.pageCount,
                image: attributes.imageLinks.thumbnail
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
                                <Form.Control type='text' 
                                    // value={this.props.search}
                                    placeholder='Enter book keyword...'
                                    onChange={this.handleOnChange}
                                    name='search' />
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
