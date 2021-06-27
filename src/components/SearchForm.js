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
        searchGoogle(this.state.search)
        this.setState({
            search: ''
        })
    }

    render() {
        return (
            <div>
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
            </div>
        );
    }
}

export default SearchForm;
