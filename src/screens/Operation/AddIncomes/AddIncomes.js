import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { connect } from "react-redux";

import { Text, Content, Item, Input, View, Icon, Button } from "native-base";
import { LinearGradient } from "expo";

import Accountpicker from "../Commun/Accountpicker";
import DatePicker from "../Commun/Datepickerr";
import IncomeCategory from "./CategoryIncomes";
import { withNavigation } from "react-navigation";
class AddIncomes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Amount: "",
      Date: new Date(),
      Description: "",
      Category: "Awards",
      Account: "Cash"
    };
  }
  goBack = () => {
    this.props.navigation.goBack();
  };
  pressHandler = () => {
    const { Amount, Date, Description, Category, Account } = this.state;
    this.props.addTransaction({
      id: 1,
      Amount,
      Date,
      Description,
      Category,
      Account,
      Type: "income"
    });
    this.props.addIncomes(Amount);
    this.props.navigation.goBack();
  };
  handleDateChange = value => {
    this.setState({ Date: value });
  };
  handleCategoryChange = value => {
    this.setState({ Category: value });
  };
  handleAccountChange = value => {
    this.setState({ Account: value });
  };
  render() {
    return (
      <LinearGradient
        colors={["#FF5F6D", "#FFC371"]}
        style={styles.ContainerStyle}
        start={[0.1, 0.1]}
      >
        <View style={styles.HeaderStyle}>
          <Button transparent onPress={this.goBack}>
            <Icon name="close" style={{ color: "#FFFFFF" }} />
          </Button>
          <Text>New Income</Text>
        </View>

        <Content style={styles.ContentStyle}>
          <Item>
            <Icon active name="md-cash" />
            <Input
              placeholder="Money"
              style={{ color: "#FFFFFF" }}
              returnKeyType="next"
              keyboardType="numeric"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={Amount => this.setState({ Amount })}
            />
          </Item>
          <Item>
            <DatePicker
              date={this.state.Date}
              handleDateChange={this.handleDateChange}
            />
          </Item>
          <Item>
            <Icon active name="md-cash" />
            <Input
              placeholder="Description"
              style={{ color: "#FFFFFF" }}
              returnKeyType="next"
              keyboardType="default"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={Description => this.setState({ Description })}
            />
          </Item>
          <Item>
            <Icon active name="md-cash" />
            <IncomeCategory
              Category={this.state.Category}
              handleCategoryChange={this.handleCategoryChange}
            />
          </Item>
          <Item>
            <Accountpicker
              Account={this.state.Account}
              handleAccountChange={this.handleAccountChange}
            />
          </Item>
          <Button block danger onPress={this.pressHandler}>
            <Text>ADD</Text>
          </Button>
        </Content>
      </LinearGradient>
    );
  }
}
const styles = StyleSheet.create({
  ContainerStyle: {
    padding: 20,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: "absolute"
  },
  ContentStyle: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    left: 20,
    right: 20,
    position: "absolute",
    top: 90
  },
  HeaderStyle: {
    flex: 1,
    flexDirection: "row"
  }
});
const mapDispatchToProps = dispatch => {
  return {
    addTransaction: transaction => {
      dispatch({
        type: "ADD_TRANSACTION",
        payload: transaction
      });
    },
    addIncomes: Amount => {
      dispatch({
        type: "ADD_INCOMES",
        payload: Amount
      });
    }
  };
};
export default connect(null, mapDispatchToProps)(withNavigation(AddIncomes));
