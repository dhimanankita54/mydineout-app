import { STORE_DATA, SEARCH_LOCATION } from './actionTypes';
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

export { storeData, locationText }