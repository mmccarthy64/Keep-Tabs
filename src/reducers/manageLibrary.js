import { uuid } from "assert-plus"

export default function manageLibrary( state = { books: [], reviews: [] }, action ){
    switch(action.type){
        case 'ADD_BOOK':
            const book = action.payload 
            return {
                ...state,
                books: [ ...state.books, book ]
            }
        case 'GET_BOOKS':
            return {
                ...state,
                books: [...state.books, action.payload]
            }
        default:
            return state
    }
}