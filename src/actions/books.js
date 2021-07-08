export const addBook = bookObj => {
    return {
        type: 'ADD_BOOK',
        payload: bookObj
    }
}

export const createBook = book => {
    return (dispatch) => {
        fetch('http://localhost:3001/books', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({book})
        })
            .then(resp => resp.json())
            .then(book => {
                dispatch(addBook(book))
            })
            .catch(err => console.log('Error:', err))
    }
}

export const renderBooks = books => {
    return {
        type: 'RENDER_BOOKS',
        payload: books
    }
}

export const getBooks = id => {
    return (dispatch) => {
        fetch(`http://localhost:3001/sessions/${id}/books`)
            .then(resp => resp.json())
            .then(books => {
                dispatch(renderBooks(books))
            })
    }
}

// export const getBooks = () => {
//     return (dispatch) => {
//         fetch(`http://localhost:3001/books`)
//             .then(resp => resp.json())
//             .then(books => {
//                 dispatch(renderBooks(books))
//             })
//     }
// }

export const deleteStoreBook = id => {
    return {
        type: 'DELETE_BOOK',
        id
    }
}

export const deleteBook = id => {
    return (dispatch) => {
        fetch(`http://localhost:3001/books/${id}`, {
            method: 'DELETE',
        }).then(() => {
            dispatch(deleteStoreBook(id))
        }).catch(error => console.log(error));
    }
}

export const loadGoogleResults = payload => {
    return {
        type: 'LOAD_SEARCH',
        payload
    }
}

export const renderComments = payload => {
    return {
        type: 'RENDER_COMMENTS',
        payload
    }
}

export const fetchComments = id => {
    return (dispatch) => {
        fetch(`http://localhost:3001/books/${id}/comments`)
            .then(resp => resp.json())
            .then(comments => {
                dispatch(renderComments(comments))
            })
    }
}

export const hideComments = id => {
    console.log(id)
    return {
        type: 'HIDE_COMMENTS',
        id
    }
}