export const addBook = bookObj => {
    return {
        type: 'ADD_BOOK',
        payload: bookObj
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