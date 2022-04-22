import { STORE_DATA, SEARCH_LOCATION, BUFFET } from './actionTypes';
import { v4 as uuid } from "uuid"

const storeData = (payload) => ({
    id: uuid(),
    type: STORE_DATA,
    payload: payload
})

const locationText = (text) => ({
    type: SEARCH_LOCATION,
    text : text
})

const buffet = (payload) => ({
    type: BUFFET,
    payload: payload
})

export { storeData, locationText , buffet}