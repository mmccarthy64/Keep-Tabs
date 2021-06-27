export const searchGoogle = (search) => {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=${process.env.REACT_APP_GOOGLE_BOOKS_API}`)
            .then(response => response.json())
            .then(results => renderGoogleResults(results))
}

export const renderGoogleResults = results => {
    const books = results.items[0].volumeInfo
    console.log(books)
}