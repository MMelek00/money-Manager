/* global window */
import { createStore, applyMiddleware, compose } from "redux";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";
import persistCombineReducers from "./reducers/combineReducers";
//import storage from 'redux-persist/es/storage'; // default: localStorage if web, AsyncStorage if react-native

const middleware = [thunk];
const configureStore = () => {
  const store = createStore(
    persistCombineReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
    compose(applyMiddleware(...middleware))
  );
  const persistor = persistStore(store, null, () => {
    store.getState();
  });

  return { persistor, store };
};

export default configureStore;
