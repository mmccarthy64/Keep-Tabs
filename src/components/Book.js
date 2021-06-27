import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import './Book.css'

class Book extends Component {
 
    render() {
        const { title, author, page_count, image } = this.props
        return (
            <div>
                <Card style={{ width: '18rem'}}>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>By: {author}</Card.Text>
                        <Card.Text>Pages: {page_count}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="primary">View Comments</Button>
                        <Button variant="primary">Delete from Library</Button>
                    </Card.Footer>
                </Card>
            </div>
        );
    }
}

export default Book;
