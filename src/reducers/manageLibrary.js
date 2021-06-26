export default function manageLibrary( state = { books: [], reviews: [] }, action ){
    const book = action.payload
    switch(action.type){
        case 'ADD_BOOK':
            return {
                ...state,
                books: [ ...state.books, book ]
            }
        case 'GET_BOOKS':
            return {
                ...state,
                books: [...state.books, ...book] // book === books seed data
            }
        default:
            return state
    }
}