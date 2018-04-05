import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Text,
  Icon
} from "native-base";
import { View, StyleSheet } from "react-native";
import Signup from "./Signup";

export default class LogScreen extends Component {
  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: "#000000" }}>
          <Left />
          <Body>
            <Title>MoneyIcon</Title>
          </Body>
          <Right>
            <Button transparent>
              <Title>Sign Up</Title>
            </Button>
          </Right>
        </Header>
        <Content style={{ backgroundColor: "#0F1121" }}>
          <View>
            <Signup />
            <Button iconLeft>
              <Icon name="logo-facebook" />
              <Text>Facebook</Text>
            </Button>
            <Button iconLeft danger>
              <Icon name="logo-google" />
              <Text>Google</Text>
            </Button>
          </View>
        </Content>
        <Footer>
          <FooterTab style={{ backgroundColor: "#000000" }}>
            <Button Dark>
              <Text style={styles.TextStyle}>LOG IN</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  TextStyle: {
    fontWeight: "bold",
    fontSize: 15
  },
  input: {
    height: 40,
    width: 360,
    backgroundColor: "rgba(255,255,255,0.2)",
    marginBottom: 10,
    //color: "#FFFFFF",
    paddingHorizontal: 10
  }
});
