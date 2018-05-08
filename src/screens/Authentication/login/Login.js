import React, { Component } from "react";
import { View, TextInput, StyleSheet, AsyncStorage } from "react-native";
import {
  Button,
  Text,
  Footer,
  FooterTab,
  Container,
  Content,
  Header,
  Left,
  Body,
  Title,
  Right
} from "native-base";
import * as firebase from "firebase";
import SocialButtons from "./SocialButtons";

export default class Login extends Component {
  signup = () => {
    this.props.navigation.navigate("Signup");
  };

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: ""
    };
  }

  loginUser = (email, password) => {
    try {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(response => {
          AsyncStorage.setItem("userId", response.uid).then(() => {
            this.props.navigation.navigate("App");
          });
        });
    } catch (err) {
      this.setState({ error: err.message });
    }
  };

  // _signInAsync = async () => {
  //   await AsyncStorage.setItem('userToken', 'abc');
  //   this.props.navigation.navigate('App');
  // };

  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: "#000000" }}>
          <Left />
          <Body>
            <Title>MoneyIcCon</Title>
          </Body>
          <Right>
            <Button transparent onPress={this.signup}>
              <Title>Sign Up</Title>
            </Button>
          </Right>
        </Header>
        <Content style={{ backgroundColor: "#0F1121" }}>
          <View style={styles.ConttentStyle}>
            <Text style={{ color: "#FFFFFF" }}>LOG IN</Text>
            <TextInput
              placeholder="user@gmail.com"
              // placeholderTextColor="rgba(255,255,255,0.7)"
              returnKeyType="next"
              onSubmitEditing={() => this.emailInput.focus()}
              keyboardType="email-address"
              style={styles.input}
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={email => this.setState({ email })}
            />

            <TextInput
              placeholder="password"
              //placeholderTextColor="rgba(255,255,255,0.7)"
              returnKeyType="go"
              ref={input => (this.passwordInput = input)}
              style={styles.input}
              secureTextEntry={true}
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={password => this.setState({ password })}
            />
            <Text style={styles.errorStyle}>{this.state.error}</Text>

            <Button transparent>
              <Text style={{ fontSize: 15, color: "#FFFFFF" }}>
                Forget Login?
              </Text>
            </Button>
            <Text style={{ fontSize: 15, color: "#FFFFFF" }}>
              -Or connect using-
            </Text>
            <SocialButtons />
          </View>
        </Content>
        <Footer>
          <FooterTab style={{ backgroundColor: "#000000" }}>
            <Button
              Dark
              onPress={() =>
                this.loginUser(this.state.email, this.state.password)
              }
            >
              <Text style={styles.TextStyle}>LOG IN</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 360,
    backgroundColor: "rgba(255,255,255,0.2)",
    marginBottom: 10,

    paddingHorizontal: 10
  },
  TextStyle: {
    fontWeight: "bold",
    fontSize: 15
  },
  ConttentStyle: {
    backgroundColor: "#0F1121",
    marginTop: 200,
    flexDirection: "column",
    alignItems: "center"
  },
  errorStyle: {
    fontWeight: "bold",
    fontSize: 15,
    color: "red"
  }
});
