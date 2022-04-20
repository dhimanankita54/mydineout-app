import { combineReducers, applymiddleware } from "redux";
import { createStore } from "redux";
import { reducer } from "./reducer"

const store = createStore(reducer)

export { store };