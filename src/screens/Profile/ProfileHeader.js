import React, { Component } from "react";
import * as firebase from "firebase";
import { ImagePicker } from "expo";
import {
  StyleSheet,
  View,
  Image,
  AsyncStorage,
  TouchableOpacity
} from "react-native";
import { LinearGradient } from "expo";
import { Text, Icon } from "native-base";

class ProfileHeader extends Component {
  state = {
    username: "mliki Melek",
    urii: "https://facebook.github.io/react-native/docs/assets/favicon.png"
  };
  componentWillMount() {
    const user = firebase.auth().currentUser;
    const value = AsyncStorage.getItem("image");
    let urii;
    if (JSON.stringify(value) == null) {
      urii = "https://facebook.github.io/react-native/docs/assets/favicon.png";
    } else {
      urii = JSON.stringify(value);
    }
    this.setState({ urii });

    if (user) {
      this.setState({
        username: user.displayName
      });
    }
  }
  handleLogout = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate("Auth");
  };

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3]
    });
    if (!result.cancelled) {
      this.setState({ urii: result.uri });
      AsyncStorage.setItem("image", JSON.stringify(result.uri));
    }
  };
  render() {
    let { urii } = this.state;
    const imageBorder = transparency => {
      return {
        borderWidth: 1,
        borderStyle: "solid",
        borderRadius: 100,
        padding: 7,
        borderColor: `rgba(255, 255, 255, ${transparency})`
      };
    };
    return (
      <LinearGradient
        colors={["#FE788D", "#FF9876"]}
        style={styles.GradientStyle}
        start={[0, 0]}
        end={[0.9, 0]}
      >
        <TouchableOpacity
          onPress={this.handleLogout}
          style={{
            alignSelf: "flex-end",
            padding: 15,
            zIndex: 2
          }}
        >
          <Icon style={{ color: "#FFFFFF" }} name="ios-log-out" />
        </TouchableOpacity>
        <View style={styles.ContainerStyle}>
          <View style={imageBorder("0.1")}>
            <View style={imageBorder("0.2")}>
              <View style={imageBorder("0.3")}>
                <TouchableOpacity onPress={() => this._pickImage()}>
                  <Image
                    style={{ width: 90, height: 90, borderRadius: 100 }}
                    source={{
                      uri: urii
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <Text
            style={{
              fontSize: 25,
              fontFamily: "Roboto_medium",
              color: "white",
              textAlign: "center"
            }}
          >
            {this.state.username}
          </Text>
        </View>
      </LinearGradient>
    );
  }
}
const styles = StyleSheet.create({
  GradientStyle: {
    height: 225
  },
  ImageStyle: {
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 100,
    padding: 7
  },
  ContainerStyle: {
    aspectRatio: 1.5,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    position: "absolute",
    top: -40
  }
});

export default ProfileHeader;
