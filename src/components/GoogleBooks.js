export const searchGoogle = (search) => {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=${process.env.REACT_APP_GOOGLE_BOOKS_API}`)
            .then(response => response.json())
            .then(results => renderGoogleResults(results))
}

export const renderGoogleResults = results => {
    const bookResults = results.items
    const booksSearchResults = []
    for (let i = 0; i < bookResults.length; i++){
        let attributes = bookResults[i].volumeInfo
        booksSearchResults.push({ 
            title: attributes.title,
            author: attributes.authors[0],
            page_count: attributes.pageCount,
            image: attributes.imageLinks.thumbnail
        })
    }
    console.log(booksSearchResults)
}