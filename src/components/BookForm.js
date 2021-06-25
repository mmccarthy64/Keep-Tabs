import React, { Component } from 'react';

class BookForm extends Component {
    render() {
        return (
            <div id='book-form'>
                <form onSubmit={this.handleOnSubmit}>
                    <div>
                        <label htmlFor='title'>Title</label>
                        <div>
                            <input type='text' />
                        </div>
                    </div>
                    <div>
                        <label htmlFor='author'>Author</label>
                        <div>
                            <input
                                type='text'
                                
                                />
                        </div>
                    </div>
                    <div>
                        <label htmlFor='title'>Page Count</label>
                        <div>
                            <input type='text' />
                        </div>
                    </div>
                    <div>
                        <label htmlFor='image'>Image URL</label>
                        <div>
                            <input type='text' />
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default BookForm;
