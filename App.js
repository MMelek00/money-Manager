import React, { Component } from "react";
import Expo, { AppLoading } from "expo";
import * as firebase from "firebase";
import Routes from "./src/Routes";

import combineReducers from "./src/store/reducers/combineReducers";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

const store = createStore(combineReducers, {}, applyMiddleware(reduxThunk));

const config = {
  apiKey: "AIzaSyDc94a7eMNA2CFXFPVNAFt1cd-B_VTCC5o",
  authDomain: "moneysaver-f9a18.firebaseapp.com",
  databaseURL: "https://moneysaver-f9a18.firebaseio.com",
  projectId: "moneysaver-f9a18",
  storageBucket: "moneysaver-f9a18.appspot.com",
  messagingSenderId: "488890179565",
  persistence: true
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
    firebase.initializeApp(config);
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <AppLoading />;
    }
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}

export default App;
