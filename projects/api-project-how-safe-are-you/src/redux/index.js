import {createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import nationalLocationReducer from "./locations.js";

const store = createStore(combineReducers({natLocations:nationalLocationReducer}), applyMiddleware(thunk));
// store.subscribe(() => console.log(store.getState()));
export default store;