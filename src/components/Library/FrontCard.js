import React from 'react';
import { Card } from 'react-bootstrap';

const FrontCard = ({book}) => {
    const { title, author, page_count, image } = book
    return (
        <div>
            <Card className='mb-2' style={{ width: '18rem'}}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>By: {author}</Card.Text>
                    <Card.Text>Pages: {page_count}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default FrontCard;
