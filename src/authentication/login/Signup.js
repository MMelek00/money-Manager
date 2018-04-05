import React, { Component } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Text } from "native-base";
export default class Signup extends Component {
  state = {};

  render() {
    return (
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
        <Text style={{ fontSize: 15, color: "#262525" }}>
          by signing up, I accept Terms of Service
        </Text>
        <Text style={{ fontSize: 15, color: "#262525" }}>
          -Or connect using-
        </Text>
      </View>
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
  ConttentStyle: {
    backgroundColor: "#0F1121",
    marginTop: 200,
    flexDirection: "column",
    alignItems: "center"
  }
});
