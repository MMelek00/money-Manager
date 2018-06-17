import React from "react";
import { ActivityIndicator, AsyncStorage, StatusBar, View } from "react-native";

class AuthLoadingScreen extends React.Component {
  // Fetch the token from storage then navigate to our appropriate place
  componentDidMount = async () => {
    const userId = await AsyncStorage.getItem("userId");
    console.log(userId);
    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate("Auth");
  };

  // Render any loading content that you like here
  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

export default AuthLoadingScreen;
