export const addBook = bookObj => {
    return {
        type: 'ADD_BOOK',
        payload: bookObj
    }
}

export const getBooks = () => {
    return {
        type: 'GET_BOOKS',
        payload: booksObj
    }
}