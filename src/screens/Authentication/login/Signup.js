import React, { Component } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import * as firebase from "firebase";
require("firebase/firestore");
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
import { withNavigation } from "react-navigation";
import SocialButtons from "./SocialButtons";

class Signup extends Component {
  goBack = () => {
    this.props.navigation.navigate("Login");
  };
  constructor(props) {
    super(props);
    this.state = {
      Username: "",
      email: "",
      password: "",
      isloading: false,
      error: ""
    };
  }

  updateUser = id => {
    const Username = this.state.Username;
    const firestore = firebase.firestore();
    const settings = { timestampsInSnapshots: true };
    firestore.settings(settings);
    const DocCol = firestore.collection("User");
    DocCol.add({
      Userid: id,
      Name: Username,
      AvatarLink: "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png",
      expense: 0,
      income: 0
    })
      .then(() => {
        this.setState({ isloading: false, error: "" });
        this.props.navigation.navigate("App");
      })
      .catch(err => console.log(err));
  };
  OnsignupPress = () => {
    const { email, password } = this.state;
    this.setState({ error: "", isloading: true });
    try {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(response => {
          return response;
        })
        .then(response => {
          this.updateUser(response.user.uid);
        });
    } catch (err) {
      this.setState({ error: "Authentification failed", isloading: false });
    }
  };

  renderSpiner() {
    if (this.state.isloading) {
      return <Spinner />;
    }
    return (
      <Button Dark onPress={this.OnsignupPress}>
        <Text style={styles.TextStyle}>Sign Up</Text>
      </Button>
    );
  }
  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: "#000000" }}>
          <Left />
          <Body />
          <Right>
            <Button transparent onPress={this.goBack}>
              <Title>LogIn</Title>
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
            <Text style={{ color: "#FFFFFF" }}>Sign up-its FREE!</Text>
            <TextInput
              placeholder="Username"
              // placeholderTextColor="rgba(255,255,255,0.7)"
              returnKeyType="next"
              onSubmitEditing={() => this.emailInput.focus()}
              style={styles.input}
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={Username => this.setState({ Username })}
            />
            <TextInput
              placeholder="email"
              // placeholderTextColor="rgba(255,255,255,0.7)"
              returnKeyType="next"
              ref={input => (this.emailInput = input)}
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
            <Text style={{ fontSize: 15, color: "#262525" }}>
              by signing up, I accept Terms of Service
            </Text>
            <Text style={{ fontSize: 15, color: "#262525" }}>
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
export default withNavigation(Signup);
