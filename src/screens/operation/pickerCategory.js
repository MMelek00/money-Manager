import React, { Component } from "react";
import { StyleSheet, View, Picker } from "react-native";
export default class PickerCategory extends Component<{}> {
  constructor() {
    super();

    this.state = {
      PickerValueHolder: ""
    };
  }

  render() {
    return (
      <View style={styles.MainContainer}>
        <Picker
          selectedValue={this.state.PickerValueHolder}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ PickerValueHolder: itemValue })
          }
        >
          <Picker.Item label="Shopping " value="Shopping" />
          <Picker.Item label="Transport" value="Transport" />
          <Picker.Item label="Traveling" value="Html" />
          <Picker.Item label="Health care" value="Health care" />
          <Picker.Item label="Eaducation" value="Eaducation" />
          <Picker.Item label="Home" value="Home" />
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
