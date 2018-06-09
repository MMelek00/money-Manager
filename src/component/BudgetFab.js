import React, { Component } from "react";
import { StyleSheet } from "react-native";
import ActionButton from "react-native-action-button";
import Icon from "react-native-vector-icons/Ionicons";
import { withNavigation } from "react-navigation";
class BudgetFab extends Component {
  addbudget = () => {
    this.props.navigation.navigate("BudgetIncome");
  };
  add = () => {
    this.props.navigation.navigate("BudgetExpense");
  };
  render() {
    return (
      <ActionButton buttonColor="rgba(231,76,60,1)">
        <ActionButton.Item
          buttonColor="#9b59b6"
          title="BudgetIncome"
          onPress={this.addbudget}
        >
          <Icon name="md-trending-up" style={styles.actionButtonIcon} />
        </ActionButton.Item>
        <ActionButton.Item
          buttonColor="#3498db"
          title="Budget Expense"
          onPress={this.add}
        >
          <Icon name="md-trending-down" style={styles.actionButtonIcon} />
        </ActionButton.Item>
      </ActionButton>
    );
  }
}

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 18,
    height: 20,
    color: "white"
  }
});

export default withNavigation(BudgetFab);
