import React, { Component } from 'react';
import SearchResults from './SearchResults';
import { Button, Form, Card } from 'react-bootstrap';
import { searchGoogle } from './GoogleBooks';

class SearchContainer extends Component {

    state = {
        search: ''
    }

    handleOnChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleOnSubmit = e => {
        e.preventDefault()
        searchGoogle(this.state.search)
    }
    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                <Card>
                    <Card.Body>
                        <h1 >Search Google Books</h1>
                        <Form onSubmit={this.handleOnSubmit}>
                            <Form.Group  controlId='formSearch'>
                                <Form.Control type='text' onChange={this.handleOnChange}/>
                            </Form.Group>
                            <Button variant="primary" type="submit" className='m-3'>
                                Search
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
                <SearchResults />
            </div>
        );
    }
}

export default SearchContainer;
