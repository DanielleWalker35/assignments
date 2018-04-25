import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";

import issueReducer from './reduxIssues';

const store = createStore(combineReducers({issues: issueReducer}), applyMiddleware(thunk));

store.subscribe(()=> console.log(store.getState()));
export default store;