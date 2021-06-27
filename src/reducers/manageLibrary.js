export default function manageLibrary( state = { books: [], reviews: [] }, action ){
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
        default:
            return state
    }
}