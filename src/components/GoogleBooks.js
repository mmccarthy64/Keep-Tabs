export const googleBooksSearch = (search) => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=${process.env.REACT_APP_GOOGLE_KEY}`)
        .then(response => response.json())
        .then(results => renderGoogleResults(results))
}