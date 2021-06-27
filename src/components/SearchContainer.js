import React, { Component } from 'react';
import SearchResults from './SearchResults';
import { Button, Form, Card } from 'react-bootstrap';

class SearchContainer extends Component {
    
    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                <Card>
                    <Card.Body>
                        <h1 >Search Google Books</h1>
                        <Form>
                            <Form.Group  controlId='formSearch'>
                                <Form.Control type='text' />
                            </Form.Group>
                            <Button onChange={this.handleOnChange} variant="primary" type="submit" className='m-2'>
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
