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
        this.props.addBook(this.state)
        this.setState({
            title: '',
            author: '',
            page_count: 0,
            image: ''
        })
    }

    handleOnChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value 
        })
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
                                type='number'
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
                                value={this.state.image}
                                onChange={this.handleOnChange} />
                        </div>
                    </div>
                        <br/>
                    <div>
                        <button type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default BookForm;
