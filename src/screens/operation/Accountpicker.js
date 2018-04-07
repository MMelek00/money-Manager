import React, { Component } from "react";
import { StyleSheet, Alert, View, Picker } from "react-native";
export default class Accountpicker extends Component<{}> {
  constructor() {
    super();

    this.state = {
      PickerValueHolder: ""
    };
  }
  GetSelectedPickerItem = () => {
    Alert.alert(this.state.PickerValueHolder);
  };
  render() {
    return (
      <View style={styles.MainContainer}>
        <Picker
          selectedValue={this.state.PickerValueHolder}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ PickerValueHolder: itemValue })
          }
        >
          <Picker.Item label="Cash " value="Cash" />
          <Picker.Item label="Saving" value="Saving" />
          <Picker.Item label="Bank" value="Bank" />
        </Picker>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: "center"
  }
});
