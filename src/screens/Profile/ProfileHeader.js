import React, { Component } from "react";
import * as firebase from "firebase";
import { ImagePicker } from "expo";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo";
import { Text, Icon, Spinner } from "native-base";
import { withNavigation } from "react-navigation";
import { AsyncStorage } from "react-native";
class ProfileHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "User Name ",
      AvatarLink: "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png",
      isloading: false,
      docId: ""
    };
    this.handleLogout = this.handleLogout.bind(this);
  }
  componentWillMount() {
    this.setState({ isloading: true });
    const userid = firebase.auth().currentUser.uid;
    const firestore = firebase.firestore();
    const settings = { timestampsInSnapshots: true };
    firestore.settings(settings);
    var docRef = firestore.collection("User").where("Userid", "==", userid);
    docRef
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          const _data = doc.data();
          this.setState({
            username: _data.Name,
            AvatarLink: _data.AvatarLink,
            docId: doc.id
          });
        });
        this.setState({ isloading: false });
      })
      .catch(err => {
        console.log(err);
        this.setState({ isloading: false });
      });
  }
  addAvatar = AvatarLink => {
    const firestore = firebase.firestore();
    const settings = { timestampsInSnapshots: true };
    firestore.settings(settings);
    const DocCol = firestore.collection("User").doc(this.state.docId);
    DocCol.update({ AvatarLink });
  };
  handleLogout = async () => {
    try {
      await firebase
        .auth()
        .signOut()
        .then(() => {
          AsyncStorage.clear();
          this.props.navigation.navigate("Auth");
        });
    } catch (e) {
      //console.log(e);
    }
  };
  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      base64: true
    });
    if (!result.cancelled) {
      console.log(result.base64);
      this.setState({ AvatarLink: result.uri });
      const sessionId = new Date().getTime();
      const snapshot = await firebase
        .storage()
        .ref()
        .child("images")
        .child(`${sessionId}`)
        .putString(result.base64, "base64");

      console.log(snapshot);
      // this.addAvatar()  ;
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
        {this.state.isloading ? (
          <Spinner />
        ) : (
          <View>
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
                          uri: this.state.AvatarLink
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
          </View>
        )}
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
