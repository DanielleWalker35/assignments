import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import peopleReducer from "./peopleRedux";
import choreReducer from "./choresRedux";

const store = createStore(combineReducers({ people: peopleReducer, chores: choreReducer} ), applyMiddleware(thunk));

store.subscribe(() => console.log(store.getState()));

export default store;
