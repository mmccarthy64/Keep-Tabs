import { uuid } from "assert-plus"

export default function manageLibrary( state = { books: [], reviews: [] }, action ){
    switch(action.type){
        case 'ADD_BOOK':
            const book = action.book 
            // console.log(action.book)
            return {
                ...state,
                books: [ ...state.books, book ]
            }
        default:
            return state
    }
}