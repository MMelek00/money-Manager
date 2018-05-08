import React from "react";
import { TouchableOpacity, Image, StyleSheet, Text } from "react-native";
const CategoryButton = ({ Name, navigation }) => {
  let imageUri;
  switch (Name) {
    case "travelling":
      imageUri = require("../CategoryImage/Travelling.jpg");
      break;
    case "clothing":
      imageUri = require("../CategoryImage/Clothing.jpg");
      break;
    case "healthcare":
      imageUri = require("../CategoryImage/Healthcare.jpg");
      break;
    case "education":
      imageUri = require("../CategoryImage/Education.jpg");
      break;
    case "food_Drink":
      imageUri = require("../CategoryImage/Food_Drink.jpg");
      break;
    case "family":
      imageUri = require("../CategoryImage/Family.jpg");
      break;
    case "house":
      imageUri = require("../CategoryImage/Family.jpg");
      break;

    default:
      imageUri = require("../CategoryImage/Shopping.jpg");
      break;
  }
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("AddExpense", { Category: Name })}
    >
      <Image source={imageUri} style={styles.CategoryImage} />
      <Text style={styles.CategoryTitle}>{Name}</Text>
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
export default CategoryButton;
