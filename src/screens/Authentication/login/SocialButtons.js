import React, { Component } from "react";
import Expo from "expo";
import { Button, Text, Icon, View } from "native-base";
import * as firebase from "firebase";
import { withNavigation } from "react-navigation";

const FB_APP_ID = "314129769112788";

class SocialButtons extends Component {
  async loginWithFacebook() {
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(
      FB_APP_ID,
      { permissions: ["public_profile"] }
    );
    if (type === "success") {
      const credential = firebase.auth.FacebookAuthProvider.credential(token);
      try {
        await firebase.auth().signInWithCredential(credential);
      } catch (e) {}
    }
  }
  // .then(
  //this.props.navigation.navigate("App"));
  async signInWithGoogleAsync() {
    try {
      const result = await Expo.Google.logInAsync({
        androidClientId:
          "321636120418-nfpc02d38o66ep1kok2vvln0r2qsgo4i.apps.googleusercontent.com",
        //iosClientId: YOUR_CLIENT_ID_HERE,
        scopes: ["profile", "email"]
      });

      if (result.type === "success") {
        this.props.navigation.navigate("App");
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
  }
  render() {
    return (
      <View style={{ flex: 1, flexDirection: "row", padding: 15 }}>
        <Button iconLeft onpress={{}}>
          <Icon name="logo-facebook" />
          <Text>Facebook</Text>
        </Button>
        <Button iconLeft danger onPress={this.signInWithGoogleAsync.bind(this)}>
          <Icon name="logo-google" />
          <Text>Google</Text>
        </Button>
      </View>
    );
  }
}
export default withNavigation(SocialButtons);
