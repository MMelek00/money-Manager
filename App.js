import React, { Component } from "react";
import Expo, { AppLoading, SQLite } from "expo";
import * as firebase from "firebase";
import { Provider } from "react-redux";
import combineReducers from "./src/store/reducers/combineReducers";
import Routes from "./src/Routes";
import { createStore } from "redux";

import FontAwesome from "./node_modules/@expo/vector-icons/fonts/FontAwesome.ttf";
import Ionicons from "./node_modules/@expo/vector-icons/fonts/MaterialIcons.ttf";

const firebaseConfig = {
  apiKey: "AIzaSyDc94a7eMNA2CFXFPVNAFt1cd-B_VTCC5o",
  authDomain: "moneysaver-f9a18.firebaseapp.com",
  databaseURL: "https://moneysaver-f9a18.firebaseio.com",
  projectId: "moneysaver-f9a18",
  stoageBucket: ""
};

const store = createStore(combineReducers);
let db = SQLite.openDatabase("db.db");

class App extends Component {
  state = {
    loading: true
  };
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons,
      FontAwesome
    });
    this.setState({ loading: false });
    firebase.initializeApp(firebaseConfig);
  }
  componentDidMount() {
    db.transaction(tx => {
      tx.executeSql(
        "create table if not exists transactions (id integer primary key not null, amount numeric, description text,category text,type text,location);"
      );
    });
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
