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
  Right,
  Spinner
} from "native-base";
import { Image } from "react-native";
import * as firebase from "firebase";
import SocialButtons from "./SocialButtons";
import { withNavigation } from "react-navigation";

class Login extends Component {
  signup = () => {
    this.props.navigation.navigate("Signup");
  };

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isloading: false,
      error: ""
    };
  }
  onLoginPress() {
    const { email, password } = this.state;
    this.setState({ error: "", isloading: true });
    try {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(this.setState({ isloading: false, error: "" }))
        .then(response => {
          AsyncStorage.setItem("userId", response.uid).then(() => {
            this.props.navigation.navigate("App");
          });
        });
    } catch (err) {
      this.setState({ error: "Authentification failed", isloading: false });
    }
  }
  renderSpiner() {
    if (this.state.isloading) {
      return (
        <Spinner
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        />
      );
    }
    return (
      <Button Dark onPress={this.onLoginPress.bind(this)}>
        <Text style={styles.TextStyle}>LOG IN</Text>
      </Button>
    );
  }
  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: "#000000" }}>
          <Left />
          <Body style={{ flexDirection: "row" }} />
          <Right>
            <Button transparent onPress={this.signup}>
              <Title>Sign Up</Title>
            </Button>
          </Right>
        </Header>
        <Content style={{ backgroundColor: "#0F1121" }}>
          <View style={{ position: "absolute", paddingHorizontal: 160 }}>
            <Image
              source={require("./logo2.png")}
              style={{
                alignSelf: "center",
                width: 50,
                height: 50
              }}
            />
            <Title>MoneyMan</Title>
          </View>
          <View style={styles.ConttentStyle}>
            <Text style={{ color: "#FFFFFF" }}>LOG IN</Text>
            <TextInput
              placeholder="user@gmail.com"
              // placeholderTextColor="rgba(255,255,255,0.7)"
              returnKeyType="next"
              onSubmitEditing={() => this.passwordInput.focus()}
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
            <View>
              <Text style={styles.errorStyle}>{this.state.error}</Text>
            </View>
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
            {this.renderSpiner()}
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
export default withNavigation(Login);
