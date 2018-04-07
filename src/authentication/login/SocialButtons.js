import React, { Component } from "react";
import Expo from "expo";
import { Button, Text, Icon, View, Alert } from "native-base";
import * as firebase from "firebase";

export default class SocialButtons extends Component {
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
      <View>
        <Button iconLeft>
          <Icon name="logo-facebook" />
          <Text>Facebook</Text>
        </Button>
        <Button iconLeft danger>
          <Icon name="logo-google" />
          <Text>Google</Text>
        </Button>
      </View>
    );
  }
}
