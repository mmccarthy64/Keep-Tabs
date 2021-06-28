// import SearchResults from "./SearchResults"
// import uuid from 'uuid'

// export const searchGoogle = (search) => {
//     fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=${process.env.REACT_APP_GOOGLE_BOOKS_API}`)
//     .then(response => response.json())
//     // .then(result => console.log(result))
//     .then(results => mapGoogleResults(results))
// }

// export const mapGoogleResults = results => {
//     const bookResults = results.items
//     const booksSearchResults = []
//     for (let i = 0; i < bookResults.length; i++){
//         let attributes = bookResults[i].volumeInfo
//         booksSearchResults.push({
//             tempId: uuid(), 
//             title: attributes.title,
//             author: attributes.authors[0],
//             page_count: attributes.pageCount,
//             image: attributes.imageLinks.thumbnail
//         })
//     }
//     console.log(booksSearchResults)
//     return (
//         <>
//             <SearchResults results={booksSearchResults} />
//         </>
//     )
// }
// // import React, { Component } from 'react';

// // class GoogleBooks extends Component {

// //     searchGoogle = (search) => {
// //             fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=${process.env.REACT_APP_GOOGLE_BOOKS_API}`)
// //                 .then(response => response.json())
// //                 .then(results => mapGoogleResults(results))
// //     }

// //     mapGoogleResults = results => {
// //         const bookResults = results.items
// //         const booksSearchResults = []
// //         for (let i = 0; i < bookResults.length; i++){
// //             let attributes = bookResults[i].volumeInfo
// //             booksSearchResults.push({ 
// //                 title: attributes.title,
// //                 author: attributes.authors[0],
// //                 page_count: attributes.pageCount,
// //                 image: attributes.imageLinks.thumbnail
// //             })
// //         }
// //     }
// //     render() {
// //         return (
// //             <div>
                
// //             </div>
// //         );
// //     }
// // }

// // export default GoogleBooks;

// // // export const searchGoogle = (search) => {
// // //         fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=${process.env.REACT_APP_GOOGLE_BOOKS_API}`)
// // //             .then(response => response.json())
// // //             .then(results => mapGoogleResults(results))
// // // }

// // //     renderSearch(booksSearchResults)
// // // }

// // // const renderSearch = results => {
// // //     return (

// // //     )
// // //     console.log(results)
// // // }