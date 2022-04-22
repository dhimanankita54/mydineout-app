import { STORE_DATA, SEARCH_LOCATION, BUFFET, REGISTER_FAIL, REGISTER_SUCCESS, LOGIN_FAIL, LOGIN_SUCCESS,ADD_USER } from './actionTypes';
import { v4 as uuid } from "uuid"

const storeData = (payload) => ({
    type: STORE_DATA,
    payload: payload
})

const locationText = (text) => ({
    type: SEARCH_LOCATION,
    text: text
})

const buffet = (payload) => ({
    type: BUFFET,
    payload: payload
})

const add_user_action = (user) => ({
    type: ADD_USER,
    payload: user
})

const login = (email, password) => ({
    type: LOGIN_SUCCESS,
    email: email,
    password: password
})

export { storeData, locationText, buffet, add_user_action, login }