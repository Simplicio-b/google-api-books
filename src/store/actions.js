import { API_BASE, AUTHENTICAION } from '../service/config'

export const handleInputSearch = (payload) => {
    return { type: "HANDLE_INPUT_SEARCH", payload }
}

export const clearInputSearch = () => {
    return { type: "CLEAR_INPUT_SEARCH" }
}

export const handleBtnSearch = (payload) => {
    const {
        books,
        startIndex
    } = payload
    
    return dispatch => {
        dispatch({  type: "CHANGE_PAGE_PAGINATION", payload: 1 })
        requestAPI(books, startIndex)
            .then(element => {
                element.json().then(el => {
                    const pgs = pagination(el.totalItems)
                    dispatch({  type: "TOTAL_PAGES_PAGINATION", payload: pgs })
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

    return pgs
}

export const handlePagination = (payload) => {
    
    const {
        page,
        book
    } = payload

    let value_pagination = parseInt(page)
    let startIndex = 0

    if(value_pagination !== 1) {
        startIndex = parseInt(value_pagination) * 10
    }

    return dispatch => {
        dispatch({  type: "CHANGE_PAGE_PAGINATION", payload: value_pagination })
        requestAPI(book, startIndex).then(val => {
            val.json().then(el => {
                const pgs = pagination(el.totalItems)
                dispatch({  type: "TOTAL_PAGES_PAGINATION", payload: pgs })
                dispatch({ type: "SUCCESS_BOOKS_REQUEST", payload: el })
            })
        }).catch(err => {
            alert("Error: Algo inesperado aconteceu")
            dispatch({ type: "BAD_BOOKS_REQUEST" })
        })
    }
}


const requestAPI = (books, startIndex = 0) => {
    const URL_PARAMS = `&filter=partial&printType=books&maxResults=10&startIndex=${startIndex}`
    return fetch(`${API_BASE}/volumes?q=${books}${URL_PARAMS}&key=${AUTHENTICAION}`)
}