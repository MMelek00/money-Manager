import React from "react";
import { TouchableOpacity, Image, StyleSheet, Text, View } from "react-native";
const CategoryIncome = ({ Name, navigation }) => {
  let imageUri;
  switch (Name) {
    case "Salary":
      imageUri = require("../CategoryImage/Salary.jpg");
      break;
    case "Investement":
      imageUri = require("../CategoryImage/Investment.jpg");
      break;
    case "Gift":
      imageUri = require("../CategoryImage/Gift.jpg");
      break;
    case "Saving":
      imageUri = require("../CategoryImage/Saving.jpg");
      break;
    default:
      imageUri = require("../CategoryImage/Salary.jpg");
      break;
  }
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("AddIncomes", { Category: Name })}
    >
      <Image source={imageUri} style={styles.CategoryImage} />
      <View style={{ backgroundColor: "black" }}>
        <Text style={styles.CategoryTitle}>{Name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  CategoryImage: {
    width: 390,
    height: 100,
    borderRadius: 10,
    margin: 10
  },
  CategoryTitle: {
    fontSize: 25,
    fontFamily: "Roboto_medium",
    color: "white",
    left: 50,
    top: 45,
    position: "absolute"
  }
});
export default CategoryIncome;
