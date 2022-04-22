
const initState = {
    data: [],
    location: "",
    buffet: [],
}

const reducer = (state = initState, action) => {
    switch (action.type) {

        case "STORE_DATA":
            return { ...state, data: action.payload }

        case "SEARCH_LOCATION":
            return { ...state, location: action.text }

        case "BUFFET" : 
            return {...state, buffet : action.payload}

        default:
            return state;
    }
}

export { reducer }