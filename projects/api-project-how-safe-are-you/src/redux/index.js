import {createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import locationReducer from "./locations.js";

const store = createStore(combineReducers({locations:locationReducer}), applyMiddleware(thunk));
store.subscribe(() => console.log(store.getState()));
export default store;