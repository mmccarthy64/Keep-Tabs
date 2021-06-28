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
        console.log(this.state)
    }

    handleOnClickDelete = () => {
        this.props.deleteBook(this.props.id)
    }
 
    render() {
        // const { title, author, page_count, image } = this.props
        return (
            <div>
                <Card className='mb-2' style={{ width: '18rem'}}>
                    <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection='horizontal' >
                        <FrontCard book={this.props}/>
                        <BackCard/>
                        {/* <Card className='mb-2' style={{ width: '18rem'}}>
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
                        </Card> */}
                        {/* <Button className='mb-2' variant="primary" onClick={this.handleOnClickComments} >View Comments</Button> */}
                        {/* <Button variant="secondary" onClick={this.handleOnClickDelete} >Delete from Library</Button> */}
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
