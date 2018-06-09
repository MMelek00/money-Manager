import React from "react";
import { StyleSheet, View, Picker } from "react-native";
const Categorypicker = ({ handleCategoryChange, Category }) => {
  return (
    <View style={styles.MainContainer}>
      <Picker
        selectedValue={Category}
        onValueChange={(itemValue, itemIndex) => {
          handleCategoryChange(itemValue);
        }}
      >
        <Picker.Item label="Shopping " value="Shopping" />
        <Picker.Item label="clothing" value="clothing" />
        <Picker.Item label="education" value="education" />
        <Picker.Item label="family" value="family" />
        <Picker.Item label="healthcare" value="healthcare" />
        <Picker.Item label="house" value="house" />
        <Picker.Item label="food_Drink" value="food_Drink" />
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
