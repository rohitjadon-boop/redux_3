import rootreducers from "./reducers";
import { createStore } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk"

const store=createStore(rootreducers,applyMiddleware(thunk));

export default store;