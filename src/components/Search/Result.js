import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';

class Result extends Component {

    handleOnClick = () => {
        this.props.createBook(this.props)
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
                        <Button variant="secondary" onClick={this.handleOnClick} >Add to Library</Button>
                    </Card.Footer>
                </Card>
            </div>
        );
    }
}

export default Result;
