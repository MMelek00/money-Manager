import React from "react";
import { StyleSheet, TouchableOpacity, Image, View } from "react-native";
import { CardItem, Text, Right, Left, Body } from "native-base";
import { withNavigation } from "react-navigation";
import moment from "moment";
const CardComponent = ({ transaction, navigation }) => {
  let imageUri;
  switch (transaction.Category) {
    case "travelling":
      imageUri = require("../Operation/Commun/CategoryImage/Travelling.jpg");
      break;
    case "clothing":
      imageUri = require("../Operation/Commun/CategoryImage/Clothing.jpg");
      break;
    case "healthcare":
      imageUri = require("../Operation/Commun/CategoryImage/Healthcare.jpg");
      break;
    case "education":
      imageUri = require("../Operation/Commun/CategoryImage/Education.jpg");
      break;
    case "food_Drink":
      imageUri = require("../Operation/Commun/CategoryImage/Food_Drink.jpg");
      break;
    case "house":
      imageUri = require("../Operation/Commun/CategoryImage/Healthcare.jpg");
      break;
    case "family":
      imageUri = require("../Operation/Commun/CategoryImage/Family.jpg");
      break;
    case "Gift":
      imageUri = require("../Operation/Commun/CategoryImage/Gift.jpg");
      break;
    case "Salary":
      imageUri = require("../Operation/Commun/CategoryImage/Salary.jpg");
      break;
    case "Saving":
      imageUri = require("../Operation/Commun/CategoryImage/Saving.jpg");
      break;
    case "Investement":
      imageUri = require("../Operation/Commun/CategoryImage/Investment.jpg");
      break;
    default:
      imageUri = require("../Operation/Commun/CategoryImage/Shopping.jpg");
      break;
  }
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("EditExpense", { transaction })}
    >
      <CardItem style={styles.CardItemStyle}>
        <Left>
          <Image style={styles.ImageStyle} source={imageUri} />
          <View style={styles.AcircleThatDoNothing} />
        </Left>
        <Body>
          <Text style={styles.TextStyle}>{transaction.Description} </Text>
          <Text style={{ fontFamily: "Roboto_medium" }}>
            {moment(transaction.Date).format("MMM Do YYYY")}
          </Text>
        </Body>
        <Right>
          {transaction.Type === "income" ? (
            <Text style={{ color: "green", fontFamily: "Roboto_medium" }}>
              +{transaction.Amount}
            </Text>
          ) : (
            <Text style={{ color: "red", fontFamily: "Roboto_medium" }}>
              -{transaction.Amount}
            </Text>
          )}
        </Right>
      </CardItem>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  TextStyle: {
    fontSize: 18,
    fontWeight: "bold"
    //color: "white"
  },
  ImageStyle: {
    height: 67,
    width: 160,
    position: "absolute",
    top: -35,
    left: -17,
    borderRadius: 10
  },
  AcircleThatDoNothing: {
    height: 200,
    width: 200,
    position: "absolute",
    top: -50,
    left: 100,
    borderRadius: 80,
    backgroundColor: "white"
  },
  CardItemStyle: {
    borderRadius: 10,
    marginBottom: 10
  }
});

export default withNavigation(CardComponent);
