import React, { Component } from "react";
import { ScrollView } from "react-native";
import CategoryIncome from "./CategoryIncome";
class IncomeSelect extends Component {
  render() {
    return (
      <ScrollView snapToAlignment={"center"}>
        <CategoryIncome Name="Salary" navigation={this.props.navigation} />
        <CategoryIncome Name="Investement" navigation={this.props.navigation} />
        <CategoryIncome Name="Gift" navigation={this.props.navigation} />
        <CategoryIncome Name="Saving" navigation={this.props.navigation} />
      </ScrollView>
    );
  }
}

export default IncomeSelect;
