import React from "react";
import Categorychart from "./CategoryChart";
import GradientBarExample from "./ExpeIncomeChart";
import { View } from "react-native";
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
        <Categorychart />
        <GradientBarExample />
      </View>
    );
  }
}
