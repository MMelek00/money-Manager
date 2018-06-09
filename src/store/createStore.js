import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import combineReducers from "./reducers/combineReducers";

export default createStore(combineReducers, {}, applyMiddleware(ReduxThunk));
