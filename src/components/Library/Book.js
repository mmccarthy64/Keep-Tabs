import React, { Component } from 'react';
import './Book.css'
import { Button, Card } from 'react-bootstrap';
import ReactCardFlip from 'react-card-flip'
import FrontCard from './FrontCard';
import BackCard from './BackCard';

class Book extends Component {

    state = {
        isFlipped: false
    }

    handleOnClickComments = () => {
        this.setState({
            isFlipped: !this.state.isFlipped
        })
        this.props.getComments()
    }

    handleOnClickDelete = () => {
        this.props.deleteBook(this.props.id)
    }
 
    render() {
        return (
            <div>
                <Card className='mb-2' style={{ width: '18rem'}}>
                    <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection='horizontal' >
                        <FrontCard book={this.props}/>
                        <BackCard comments={this.props.comments}/>
                    </ReactCardFlip>
                    <Card.Footer>
                        <Button className='mb-2' variant="primary" onClick={this.handleOnClickComments} >{this.state.isFlipped ? 'Hide Comments' : 'View Comments'}</Button>
                        <Button variant="secondary" onClick={this.handleOnClickDelete} >Delete from Library</Button>
                    </Card.Footer>
                </Card>
            </div>
        );
    }
}

export default Book;
