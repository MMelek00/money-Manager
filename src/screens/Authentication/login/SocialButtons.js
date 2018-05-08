import React, { Component } from "react";
import Expo, { AuthSession } from "expo";
import { Button, Text, Icon, View, Alert } from "native-base";
import * as firebase from "firebase";

const FB_APP_ID = "314129769112788";

export default class SocialButtons extends Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user != null) {
        Alert.alert(user);
      }
    });
  }
  state = {
    result: null
  };

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
        <Button iconLeft onpress={this.logInWithFacebook}>
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
