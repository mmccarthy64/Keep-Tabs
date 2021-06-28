import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import './Book.css'

let viewComments = false

class Book extends Component {

    handleOnClickComments = () => {
        viewComments = !viewComments
        console.log(this.props)
        // this.props.image = ''
    }

    handleOnClickDelete = () => {
        this.props.deleteBook(this.props.id)
    }
 
    render() {
        const { title, author, page_count, image } = this.props
        return (
            <div>
                <Card className='mb-2' style={{ width: '18rem'}}>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>By: {author}</Card.Text>
                        <Card.Text>Pages: {page_count}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button className='mb-2' variant="primary" onClick={this.handleOnClickComments} >View Comments</Button>
                        <Button variant="secondary" onClick={this.handleOnClickDelete} >Delete from Library</Button>
                    </Card.Footer>
                </Card>
            </div>
        );
    }
}

export default Book;
