
const initState = {
    data: [],
    location: "",
    buffet: [],
    isLoggedIn: false,
    addUser : {
        name: "",
        email: "",
        password:""
    }

}

const reducer = (state = initState, action) => {
    switch (action.type) {

        case "STORE_DATA":
            return { ...state, data: action.payload }

        case "SEARCH_LOCATION":
            return { ...state, location: action.text }

        case "BUFFET":
            return { ...state, buffet: action.payload }

        case "ADD_USER":
            return { ...state, addUser: action.payload}

        default:
            return state;
    }
}

export { reducer }