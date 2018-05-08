import React, { Component } from "react";
import * as firebase from "firebase";
import Expo from "expo";
import { Text, TouchableOpacity, StyleSheet, Alert } from "react-native";

export default class WithFB extends Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user != null) {
        Alert.alert(user);
      }
    });
  }

  async logInWithFacebook() {
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(
      314129769112788,
      { permissions: ["public_profile"] }
    );

    if (type === "success") {
      const credential = firebase.auth.FacebookAuthProvider.credential(token);
      firebase
        .auth()
        .signInWithCredential(credential)
        .catch(error => {
          Alert.alert(error);
        });
    }
  }

  render() {
    return (
      <TouchableOpacity
        style={styles.ButtonContainer}
        onPress={() => this.logInWithFacebook}
      >
        <Text style={styles.buttonText}>LOGIN With FACEBOOK</Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  ButtonContainer: {
    backgroundColor: "#2980b9",
    paddingVertical: 15
  },
  ButtonText: {
    textAlign: "center",
    color: "#FFFFFF",
    fontWeight: "700"
  }
});
