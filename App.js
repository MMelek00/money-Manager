import React, { Component } from "react";
import Expo, { AppLoading } from "expo";
import Routes from "./src/Routes";
import * as firebase from "firebase";
import "core-js/es6/symbol";
import "core-js/fn/symbol/iterator";
// providers
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import configureStore from "./src/store/createStore";

const firebaseConfig = {
  apiKey: "AIzaSyDc94a7eMNA2CFXFPVNAFt1cd-B_VTCC5o",
  authDomain: "moneysaver-f9a18.firebaseapp.com",
  databaseURL: "https://moneysaver-f9a18.firebaseio.com",
  projectId: "moneysaver-f9a18",
  storageBucket: "moneysaver-f9a18.appspot.com",
  messagingSenderId: "488890179565",
  persistence: true
};
const { persistor, store } = configureStore();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: false });
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    if (this.state.loading) {
      return <AppLoading />;
    }
    return (
      <PersistGate loading={<AppLoading />} persistor={persistor}>
        <Provider store={store}>
          <Routes />
        </Provider>
      </PersistGate>
    );
  }
}

export default App;
