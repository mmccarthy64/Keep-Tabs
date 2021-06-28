export default function manageLibrary( state = { books: [], searchResults: [] }, action ){
    switch(action.type){
        case 'ADD_BOOK':
            const book = action.payload
            return {
                ...state,
                books: [ ...state.books, book ]
            }
        case 'GET_BOOKS':
            const books = action.payload
            return {
                ...state,
                books: [...state.books, ...books]
            }

        case 'DELETE_BOOK':
            const newbooks = state.books.filter( book => book.id !== action.id )
            return {
                ...state,
                books: [ ...newbooks ]
            }
        case 'LOAD_SEARCH':
            const results = action.payload
            console.log(results)
            return {
                ...state,
                searchResults: [ ...state.searchResults, ...results]
            }
        default:
            return state
    }
}