
const initState = {
    data: [],
    location: ""
}

const reducer = (state = initState, action) => {
    switch (action.type) {

        case "STORE_DATA":
            return { ...state, data: action.payload }

        case "SEARCH_LOCATION":
            return { ...state, location: action.text }

        default:
            return state;
    }
}

export { reducer }