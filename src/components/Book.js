import React, { Component } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

class Book extends Component {
 
    render() {
        const { title, author, page_count, image } = this.props
        return (
            <div>
                <Container>
                        <Card style={{ flex: 1, width: '18rem' }}>
                            <Card.Img variant="top" src={image} />
                            <Card.Body>
                                <Card.Title>{title}</Card.Title>
                                <Card.Text>By: {author}</Card.Text>
                                <Card.Text>Pages: {page_count}</Card.Text>
                                <Button variant="primary">View Comments</Button>
                            </Card.Body>
                        </Card>
                </Container>
            </div>
        );
    }
}

export default Book;
