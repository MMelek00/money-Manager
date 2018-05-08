import React, { Component } from "react";
import { StyleSheet, View, Picker } from "react-native";
export default class IncomeCategory extends Component<{}> {
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
          <Picker.Item label="Awards " value="Awards" />
          <Picker.Item label="Gift" value="Gift" />
          <Picker.Item label="Investments" value="Investments" />
          <Picker.Item label="Salary" value="Salary" />
          <Picker.Item label="Others" value="Others" />
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
