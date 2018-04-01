import { Component } from "react";
import * as firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDc94a7eMNA2CFXFPVNAFt1cd-B_VTCC5o",
  authDomain: "moneysaver-f9a18.firebaseapp.com",
  databaseURL: "https://moneysaver-f9a18.firebaseio.com",
  projectId: "moneysaver-f9a18",
  stoageBucket: ""
};
firebase.initializeApp(firebaseConfig);

class FirebaseCon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      email: "",
      password: ""
    };
  }
  signUpuser = (Name, email, password) => {};
  loginUser = (email, password) => {};
  render() {}
}

export default FirebaseCon;
