import { uuid } from "assert-plus"

export default function manageLibrary( state = { books: [], reviews: [] }, action ){
    switch(action.type){
        case 'ADD_BOOK':
            // const book = { action.book, id: uuid()}
            console.log(action.book)

        default:
            return state
    }
}