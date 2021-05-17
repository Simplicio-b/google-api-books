export const handleInputSearch = (payload) => {
    return { type: "HANDLE_INPUT_SEARCH", payload }
}

export const clearInputSearch = () => {
    return { type: "CLEAR_INPUT_SEARCH" }
}

export const handleBtnSearch = (payload) => {
    return dispatch => {
        //  https://developers.google.com/books/docs/v1/reference/bookshelves/list <- docs api
        const api = 'https://www.googleapis.com/books/v1'
        const KEY = ''
        const filter = "&filter=full&orderBy=relevance"
        //  const filter = ""

        fetch(`${api}/volumes?q=${payload}${filter}&key=${KEY}`)
            .then(element => {
                element.json().then(el => {
                    dispatch({ type: "SUCCESS_BOOKS_REQUEST", payload: el })
                })
            }).catch(err => {
                alert("Error: Algo inesperado aconteceu")
                dispatch({ type: "BAD_BOOKS_REQUEST" })
            })

       
    }
}
