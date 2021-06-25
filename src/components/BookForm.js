import React, { Component } from 'react';

class BookForm extends Component {
    render() {
        return (
            <div id='book-form'>
                <form>
                    <div>
                        <label for='title' />
                        <input type='text' />
                    </div>
                    <div>
                        <label />
                        <input />
                    </div>
                </form>
            </div>
        );
    }
}

export default BookForm;
