import React, { Component } from 'react';
import './Book.css'
import { Button, Card } from 'react-bootstrap';
import ReactCardFlip from 'react-card-flip'
import FrontCard from './FrontCard';
import BackCard from './BackCard';

class Book extends Component {

    state = {
        isFlipped: false,
        likes: 0
    }

    handleOnClickComments = () => {
        this.setState({
            isFlipped: !this.state.isFlipped
        })
        this.state.isFlipped ? this.props.hideComments(this.props.id) : this.props.getComments(this.props.id)
    }

    handleOnClickDelete = () => {
        this.props.deleteBook(this.props.id)
    }

    handleLike = () => {
        this.setState( (prevState, prevProps) => ({
            likes: prevState.likes + parseInt(prevProps.likes)
        }))
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
                        <Button onClick={this.handleLike}>{this.state.likes}</Button>
                    </Card.Footer>
                </Card>
            </div>
        );
    }
}

export default Book;
