import React from "react";
import { StyleSheet, View, Picker } from "react-native";
const AccountPicker = ({ handleAccountChange, Account }) => {
  return (
    <View style={styles.MainContainer}>
      <Picker
        selectedValue={Account}
        onValueChange={(itemValue, itemIndex) => {
          handleAccountChange(itemValue);
        }}
      >
        <Picker.Item label="Cash " value="Cash" />
        <Picker.Item label="Saving" value="Saving" />
        <Picker.Item label="Bank" value="Bank" />
      </Picker>
    </View>
  );
};
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: "center"
  }
});
export default AccountPicker;
