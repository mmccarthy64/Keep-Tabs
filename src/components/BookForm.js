import React, { Component } from 'react';

class BookForm extends Component {

    state = {
        title: '',
        author: '',
        page_count: 0,
        image: ''
    }

    handleOnSubmit = e => {
        e.preventDefault()
        this.setState({

        })
    }

    handleOnChange = e => {
        
    }

    render() {
        return (
            <div id='book-form'>
                <form onSubmit={this.handleOnSubmit}>
                    <div>
                        <label htmlFor='title'>Title</label>
                        <div>
                            <input 
                                type='text'
                                name='title'
                                value={this.state.title}
                                onChange={this.handleOnChange} />
                        </div>
                    </div>
                    <div>
                        <label htmlFor='author'>Author</label>
                        <div>
                            <input
                                type='text'
                                name='author'
                                value={this.state.author}
                                onChange={this.handleOnChange}
                                />
                        </div>
                    </div>
                    <div>
                        <label htmlFor='page_count'>Page Count</label>
                        <div>
                            <input
                                type='text'
                                name='page_count'
                                value={this.state.page_count}
                                onChange={this.handleOnChange} />
                        </div>
                    </div>
                    <div>
                        <label htmlFor='image'>Image URL</label>
                        <div>
                            <input
                                type='text'
                                name='image'
                                valu={this.state.image}
                                onChange={this.handleOnChange} />
                        </div>
                    </div>
                    <div>
                        <button type='submit' />
                    </div>
                </form>
            </div>
        );
    }
}

export default BookForm;
