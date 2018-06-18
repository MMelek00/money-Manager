import React from "react";
import Categorychart from "./CategoryChart";
import GradientBarExample from "./ExpeIncomeChart";
import { View, Text } from "react-native";
export default class Statistics extends React.PureComponent {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Categorychart />
        <View style={{ flex: 1 }}>
          <Text
            style={{
              fontFamily: "Roboto_medium",
              color: "tomato",
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
