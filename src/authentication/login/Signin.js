import React, { Component } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Button, Text } from "native-base";
export default class Sighnin extends Component {
  render() {
    return (
      <View style={styles.ConttentStyle}>
        <Text style={{ color: "#FFFFFF" }}>LOG IN</Text>
        <TextInput
          placeholder="email"
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
        <Button transparent>
          <Text style={{ fontSize: 15, color: "#FFFFFF" }}>Forget Login?</Text>
        </Button>
        <Text style={{ fontSize: 15, color: "#FFFFFF" }}>
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
