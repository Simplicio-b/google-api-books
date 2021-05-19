const INITIAL_STATE = {
    search_input: '',
    books_data: [],
    page_number: 0,
    total_pagination: 0
}

function reducer(state = INITIAL_STATE, action){
    switch(action.type) {
        case  "HANDLE_INPUT_SEARCH":
            return { ...state, search_input: action.payload }
        case "CLEAR_INPUT_SEARCH":
            return { ...state, search_input: '' }
        case "SUCCESS_BOOKS_REQUEST":
            return { ...state, books_data: action.payload }
        case "TOTAL_PAGES_PAGINATION":
            return { ...state, total_pagination: action.payload }
        case "CHANGE_PAGE_PAGINATION" :
            return { ...state, page_number: action.payload }
        default :
            return state
    }
}

export default reducer
