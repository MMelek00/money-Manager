import React, { Component } from "react";
import { ScrollView } from "react-native";
import CategoryButton from "./CategoryButton";
class CategorySelect extends Component {
  render() {
    return (
      <ScrollView snapToAlignment={"center"}>
        <CategoryButton Name="shopping" navigation={this.props.navigation} />
        <CategoryButton Name="clothing" navigation={this.props.navigation} />
        <CategoryButton Name="education" navigation={this.props.navigation} />
        <CategoryButton Name="family" navigation={this.props.navigation} />
        <CategoryButton Name="healthcare" navigation={this.props.navigation} />
        <CategoryButton Name="house" navigation={this.props.navigation} />
        <CategoryButton Name="food_Drink" navigation={this.props.navigation} />
      </ScrollView>
    );
  }
}

export default CategorySelect;
