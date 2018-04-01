import React, { Component } from "react";
import { Container, Content, Form, Item, Input, Label } from "native-base";
import { Button, alert } from "react-native";
import * as firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDc94a7eMNA2CFXFPVNAFt1cd-B_VTCC5o",
  authDomain: "moneysaver-f9a18.firebaseapp.com",
  databaseURL: "https://moneysaver-f9a18.firebaseio.com",
  projectId: "moneysaver-f9a18",
  stoageBucket: ""
};
firebase.initializeApp(firebaseConfig);
export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  loginUser = (email, password) => {
    try {
      firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      alert(error.toString());
    }
  };
  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item stackedLabel last>
              <Label>Email</Label>
              <Input
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={email => this.setState({ email })}
              />
            </Item>
            <Item stackedLabel last>
              <Label>Password</Label>
              <Input
                secureTetEntry={true}
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={password => this.setState({ password })}
              />
            </Item>
          </Form>
          <Button
            title="LOG IN"
            color="#841584"
            onPress={() =>
              this.loginUser(this.state.email, this.state.password)
            }
          />
        </Content>
      </Container>
    );
  }
}
