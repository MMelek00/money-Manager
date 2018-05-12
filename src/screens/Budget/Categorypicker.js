import React from "react";
import { StyleSheet, View, Picker } from "react-native";
const Categorypicker = ({ handleCatgoryChange, Category }) => {
  return (
    <View style={styles.MainContainer}>
      <Picker
        selectedValue={Category}
        onValueChange={(itemValue, itemIndex) => {
          handleCatgoryChange(itemValue);
        }}
      >
        <Picker.Item label="Shopping " value="Shopping" />
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
export default Categorypicker;
