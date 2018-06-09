import React, { Component } from "react";
import { StyleSheet, Image } from "react-native";
import { connect } from "react-redux";
//import { SQLite } from "expo";
import {
  View,
  Content,
  Item,
  Input,
  Icon,
  Button,
  Text,
  Title
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import Accountpicker from "../Commun/Accountpicker";
import DatePicker from "../Commun/Datepickerr";
import { withNavigation } from "react-navigation";
class AddIncomes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Amount: "",
      Date: new Date(),
      Description: "",
      Category: "Awards",
      Account: "Cash",
      isClicked: false
    };
  }
  pressHandler = () => {
    this.setState({ isClicked: true });
    const { Amount, Date, Description, Account } = this.state;
    const { params } = this.props.navigation.state;
    const Category = params ? params.Category : null;
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
    this.props.navigation.pop(2);
  };
  handleDateChange = value => {
    this.setState({ Date: value });
  };
  handleAccountChange = value => {
    this.setState({ Account: value });
  };
  goBack = () => {
    this.props.navigation.pop(2);
  };
  render() {
    const { params } = this.props.navigation.state;
    const Category = params ? params.Category : null;
    let imageUri;
    switch (Category) {
      case "Salary":
        imageUri = require("../Commun/CategoryImage/Salary.jpg");
        break;
      case "Investement":
        imageUri = require("../Commun/CategoryImage/Investment.jpg");
        break;
      case "Gift":
        imageUri = require("../Commun/CategoryImage/Gift.jpg");
        break;
      case "Saving":
        imageUri = require("../Commun/CategoryImage/Saving.jpg");
        break;
      default:
        imageUri = require("../Commun/CategoryImage/Salary.jpg");
        break;
    }
    return (
      <View>
        <Image style={{ height: 225, width: 450 }} source={imageUri} />
        <Button transparent onPress={this.goBack} style={styles.buttonStyle}>
          <Icon style={{ color: "#FFFFFF" }} name="close" />
        </Button>
        <View style={styles.HeaderStyle}>
          <Title style={{ fontSize: 30, textAlign: "center" }}>
            {Category}
          </Title>
        </View>

        <Content style={styles.ContentStyle}>
          <View style={{ padding: 20 }}>
            <Item>
              <Ionicons style={styles.iconStyle} name="logo-euro" />
              <Input
                placeholder="Money"
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
              <Ionicons style={styles.iconStyle} name="ios-create" />
              <Input
                placeholder="Description"
                returnKeyType="next"
                keyboardType="default"
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={Description => this.setState({ Description })}
              />
            </Item>
            <Item>
              <Ionicons style={styles.iconStyle} name="ios-briefcase" />
              <Accountpicker
                Account={this.state.Account}
                handleAccountChange={this.handleAccountChange}
              />
            </Item>
          </View>
          <Button
            disabled={this.state.isClicked}
            block
            success
            onPress={this.pressHandler}
          >
            <Text>ADD</Text>
          </Button>
        </Content>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  ContainerStyle: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: "absolute"
  },
  buttonStyle: {
    backgroundColor: "#f1404b",
    position: "absolute",
    borderRadius: 100,
    margin: 10,
    right: 0
  },
  ContentStyle: {
    borderRadius: 20,
    left: 20,
    right: 20,
    position: "absolute",
    top: 220
  },
  HeaderStyle: {
    //flex: 1,
    flexDirection: "row",
    //textAlignVertical: "center"
    position: "absolute",
    top: 170,
    left: 40
  },
  iconStyle: { fontSize: 25, color: "#FE788D" }
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
