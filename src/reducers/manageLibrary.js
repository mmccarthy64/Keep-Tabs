export default function manageLibrary( state = { books: [], reviews: [] }, action ){
    switch(action.type){
        case 'ADD_BOOK':
            const book = action.payload
            return {
                ...state,
                books: [ ...state.books, book ]
            }
        case 'GET_BOOKS':
            const books = action.payload.data
            return {
                ...state,
                books: [...state.books, ...books]
            }
        default:
            return state
    }
}