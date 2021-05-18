const INITIAL_STATE = {
    search_input: '',
    books_data: []
}

function reducer(state = INITIAL_STATE, action){
    switch(action.type) {
        case  "HANDLE_INPUT_SEARCH":
            return { ...state, search_input: action.payload }
        case "CLEAR_INPUT_SEARCH":
            return { ...state, search_input: '' }
        case "SUCCESS_BOOKS_REQUEST":
            return { ...state, books_data: action.payload }
        default :
            return state
    }
}

export default reducer
