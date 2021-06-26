export const addBook = bookObj => {
    return {
        type: 'ADD_BOOK',
        payload: bookObj
    }
}

export const getBooks = () => {
    
    fetch('http://localhost:3001/books')
        .then(resp => resp.json())
        .then(books => {
            
        })
}