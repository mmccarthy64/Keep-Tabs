import React, { Component } from 'react';
import Books from '../components/Books'

class BooksContainer extends Component {
    render() {
        return (
            <div>
                < Books />
                {/* search GoogleBooks */}
            </div>
        );
    }
}

export default BooksContainer;
