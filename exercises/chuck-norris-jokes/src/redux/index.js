import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";


import jokeReducer from './jokes.js';

const store = createStore(combineReducers({jokes:jokeReducer}),applyMiddleware(thunk));
store.subscribe(() => console.log(store.getState()));
export default store;
