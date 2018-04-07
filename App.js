import React, { Component } from "react";
import FAbss from "./src/component/fabs";
import * as firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDc94a7eMNA2CFXFPVNAFt1cd-B_VTCC5o",
  authDomain: "moneysaver-f9a18.firebaseapp.com",
  databaseURL: "https://moneysaver-f9a18.firebaseio.com",
  projectId: "moneysaver-f9a18",
  stoageBucket: ""
};
firebase.initializeApp(firebaseConfig);
class App extends Component {
  render() {
    return <FAbss />;
  }
}

export default App;
