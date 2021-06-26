import React, { Component } from 'react';

class Book extends Component {
 
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <img src={this.props.image} alt='book-image' />
            </div>
        );
    }
}

export default Book;
