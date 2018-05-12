import React, { Component } from "react";
import { StyleSheet } from "react-native";
import ActionButton from "react-native-action-button";
import Icon from "react-native-vector-icons/Ionicons";
import { withNavigation } from "react-navigation";
class Fab extends Component {
  AddExpense = () => {
    this.props.navigation.navigate("CategorySelect");
  };
  AddIncomes = () => {
    this.props.navigation.navigate("AddIncomes");
  };
  render() {
    return (
      <ActionButton buttonColor="rgba(231,76,60,1)">
        <ActionButton.Item
          buttonColor="#9b59b6"
          title="Income"
          onPress={this.AddIncomes}
        >
          <Icon name="md-trending-up" style={styles.actionButtonIcon} />
        </ActionButton.Item>
        <ActionButton.Item
          buttonColor="#3498db"
          title="Expense"
          onPress={this.AddExpense}
        >
          <Icon name="md-trending-down" style={styles.actionButtonIcon} />
        </ActionButton.Item>
        <ActionButton.Item buttonColor="#1abc9c" title="Transfert" onPress={{}}>
          <Icon name="md-swap" style={styles.actionButtonIcon} />
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

export default withNavigation(Fab);
