import React, { Component } from "react";
import { connect } from "react-redux";
import {
  View,
  Content,
  Item,
  Input,
  Icon,
  Button,
  Title,
  Text
} from "native-base";

import { StyleSheet } from "react-native";
import { LinearGradient } from "expo";

import Accountpicker from "../Commun/Accountpicker";
import DatePicker from "../Commun/Datepickerr";

import { withNavigation } from "react-navigation";

class EditExpense extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Amount: "",
      Date: new Date(),
      Description: "",
      Category: "Shopping",
      Account: "Cash",
      Place: ""
    };
  }
  componentDidMount = () => {
    const { params } = this.props.navigation.state;
    const transaction = params ? params.transaction : null;
    this.setState({
      Amount: transaction.Amount,
      Date: transaction.Date,
      Description: transaction.Description,
      Category: transaction.Category,
      Account: transaction.Account,
      Place: transaction.Place
    });
  };
  goBack = () => {
    this.props.navigation.goBack();
  };
  pressHandler = () => {
    const { Amount, Date, Description, Category, Account, Place } = this.state;
    const { params } = this.props.navigation.state;
    const transaction = params ? params.transaction : null;
    this.props.editTransaction({
      id: transaction.id,
      Amount,
      Date,
      Description,
      Category,
      Account,
      Place
    });
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
    // const { params } = this.props.navigation.state;
    // const transaction = params ? params.transaction : null;
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
          <Title style={{ color: "#FFFFFF" }}>Edit Expense</Title>
        </View>

        <Content style={styles.ContentStyle}>
          <Item>
            <Icon active name="md-cash" />
            <Input
              placeholder="Money"
              value={this.state.Amount}
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
            <Icon active name="" />
            <Input
              placeholder="Description"
              value={this.state.Description}
              returnKeyType="next"
              keyboardType="default"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={Description => this.setState({ Description })}
            />
          </Item>
          <Item>
            <Accountpicker
              Account={this.state.Account}
              handleAccountChange={this.handleAccountChange}
            />
          </Item>
          <Item>
            <Icon active name="md-locate" />
            <Input placeholder="Place" value={this.state.Place} />
          </Item>
          <Button block danger onPress={this.pressHandler}>
            <Text>Edit</Text>
          </Button>
        </Content>
      </LinearGradient>
    );
  }
}

function edit(transaction) {
  return {
    type: "EDIT_TRANSACTION",
    payload: transaction
  };
}

const mapDispatchToProps = dispatch => {
  return {
    editTransaction: transaction => {
      dispatch(edit(transaction));
    }
  };
};
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

export default connect(null, mapDispatchToProps)(withNavigation(EditExpense));
