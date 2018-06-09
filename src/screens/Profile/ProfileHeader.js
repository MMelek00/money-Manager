import React, { Component } from "react";
import * as firebase from "firebase";
import { ImagePicker } from "expo";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo";
import { Text, Icon } from "native-base";
import { withNavigation } from "react-navigation";

class ProfileHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "User Name ",
      urii: "https://facebook.github.io/react-native/docs/assets/favicon.png"
    };
    this.handleLogout = this.handleLogout.bind(this);
  }
  componentWillMount() {
    const user = firebase.auth().currentUser;
    if (user) {
      this.setState({
        username: user.displayName,
        urii: user.photoURL
      });
    }
  }
  handleLogout = async () => {
    try {
      await firebase
        .auth()
        .signOut()
        .then(this.props.navigation.navigate("Auth"));
    } catch (e) {
      //console.log(e);
    }
  };

  _pickImage = async () => {
    const user = firebase.auth().currentUser;
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3]
    });
    if (!result.cancelled) {
      this.setState({ urii: result.uri });
      user.updateProfile({
        photoURL: result.uri
      });
    }
  };
  render() {
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
          onPress={this.handleLogout.bind(this)}
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
                      uri: this.state.urii
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

export default withNavigation(ProfileHeader);
