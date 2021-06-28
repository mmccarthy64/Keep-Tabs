import React from 'react';
import { Card } from 'react-bootstrap';

const BackCard = ({comments}) => {
    const render = comments.map( comment => <li key={comment.id}>{comment.content}</li>)
    return (
        <div>
            <Card className='mb-2' style={{ width: '18rem'}}>
                <Card.Header>Comments</Card.Header>
                <Card.Body>
                    <Card.Text>{render}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default BackCard;
