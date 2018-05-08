import React, { Component } from "react";
import { View } from "react-native";
import ProfileHeader from "./ProfileHeader";
import ProfileOption from "./ProfileOption";
class Profile extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ProfileHeader />
        <ProfileOption />
      </View>
    );
  }
}

export default Profile;
