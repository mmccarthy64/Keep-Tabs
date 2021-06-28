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
    }
}

export const renderBooks = books => {
    return {
        type: 'GET_BOOKS',
        payload: books
    }
}

export const getBooks = () => {
    return (dispatch) => {
        fetch('http://localhost:3001/books')
            .then(resp => resp.json())
            .then(books => {
                dispatch(renderBooks(books))
            })
    }
}

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
    console.log(payload)
    return {
        type: 'LOAD_SEARCH',
        payload
    }
}