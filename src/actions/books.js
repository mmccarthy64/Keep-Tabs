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

export const getBooks = () => {
    return (dispatch) => {
        fetch('http://localhost:3001/books')
            .then(resp => resp.json())
            .then(books => {
                dispatch({
                    type: 'GET_BOOKS',
                    payload: books
                })
            })
    }
}