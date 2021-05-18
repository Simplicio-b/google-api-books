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
        const filter = "&filter=partial&printType=books&maxResults=10&startIndex=0" 
        //  const filter = ""

        fetch(`${api}/volumes?q=${payload}${filter}&key=${KEY}`)
            .then(element => {
                element.json().then(el => {
                    pagination(el.totalItems)

                    dispatch({ type: "SUCCESS_BOOKS_REQUEST", payload: el })
                })
            }).catch(err => {
                alert("Error: Algo inesperado aconteceu")
                dispatch({ type: "BAD_BOOKS_REQUEST" })
            })

       
    }
}

const pagination = (total_items) => {
    const total = total_items
    const resto = total%10
    let pgs = 0

    if(resto === 0) {
        pgs = total / 10
    }else {
        pgs = ((total - resto) / 10) + 1
    }

    console.log(total%10)
    // console.log(el)
    console.log(total)
    console.log(pgs)
}
