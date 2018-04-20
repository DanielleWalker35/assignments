import {createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import bountyReducer from "./reduxBounties.js";

const store = createStore(combineReducers({bounties:bountyReducer}), applyMiddleware(thunk));

store.subscribe(()=> console.log(store.getState()));
export default store;