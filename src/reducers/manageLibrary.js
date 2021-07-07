export default function manageLibrary( state = { books: [], searchResults: [], comments: [] }, action ){
    switch(action.type){
        case 'ADD_BOOK':
            const book = action.payload
            return {
                ...state,
                books: [ ...state.books, book ]
            }
        case 'RENDER_BOOKS':
            const books = action.payload
            return {
                ...state,
                books: [...books]
            }

        case 'DELETE_BOOK':
            const updatedBooks = state.books.filter( book => book.id !== action.id )
            return {
                ...state,
                books: [ ...updatedBooks ]
            }
        case 'LOAD_SEARCH':
            const results = action.payload
            return {
                ...state,
                searchResults: [ ...results]
            }
        case 'RENDER_COMMENTS':
            const comments = action.payload.map( comment => comment )
            console.log(comments)
            return {
                ...state,
                comments: [ ...state.comments, ...comments]
            }

        case 'HIDE_COMMENTS':
            const updateComments = state.comments.filter( comment => comment.book_id !== action.id)
            return {
                ...state,
                comments: [ ...updateComments ]
            }
        default:
            return state
    }
}