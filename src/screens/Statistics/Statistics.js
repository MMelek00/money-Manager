import React from "react";
import Categorychart from "./CategoryChart";
import GradientBarExample from "./ExpeIncomeChart";
import { View, Text } from "react-native";
export default class Statistics extends React.PureComponent {
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-between"
        }}
      >
        <View>
          <Text
            style={{
              fontFamily: "Roboto_medium",
              color: "white",
              fontSize: 25
            }}
          >
            {" "}
            division of Expenses Per Category
          </Text>
          <Categorychart />
        </View>
        <View>
          <Text
            style={{
              fontFamily: "Roboto_medium",
              color: "white",
              fontSize: 25
            }}
          >
            {" "}
            Balance of the week
          </Text>
          <GradientBarExample />
        </View>
      </View>
    );
  }
}
