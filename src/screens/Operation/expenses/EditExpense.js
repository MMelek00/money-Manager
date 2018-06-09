import React, { Component } from "react";
import { StyleSheet, Image } from "react-native";
import { connect } from "react-redux";
import {
  View,
  Content,
  Item,
  Icon,
  Input,
  Button,
  Title,
  Text
} from "native-base";
import { Ionicons } from "@expo/vector-icons";

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
      Place: "",
      isClicked: false
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
    this.props.navigation.pop(1);
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
    let imageUri;
    const { params } = this.props.navigation.state;
    const Category = params ? params.transaction.Category : null;
    switch (Category) {
      case "travelling":
        imageUri = require("../Commun/CategoryImage/Travelling.jpg");
        break;
      case "clothing":
        imageUri = require("../Commun/CategoryImage/Clothing.jpg");
        break;
      case "healthcare":
        imageUri = require("../Commun/CategoryImage/Healthcare.jpg");
        break;
      case "education":
        imageUri = require("../Commun/CategoryImage/Education.jpg");
        break;
      case "food_Drink":
        imageUri = require("../Commun/CategoryImage/Food_Drink.jpg");
        break;
      case "house":
        imageUri = require("../Commun/CategoryImage/Healthcare.jpg");
        break;
      case "family":
        imageUri = require("../Commun/CategoryImage/Family.jpg");
        break;
      default:
        imageUri = require("../Commun/CategoryImage/Shopping.jpg");
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
              <Ionicons style={styles.iconStyle} name="ios-create" />
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
              <Ionicons style={styles.iconStyle} name="ios-briefcase" />
              <Accountpicker
                Account={this.state.Account}
                handleAccountChange={this.handleAccountChange}
              />
            </Item>
            <Item>
              <Ionicons style={styles.iconStyle} name="ios-flag" />
              <Input placeholder="Place" value={this.state.Place} />
            </Item>
          </View>
          <Button block danger onPress={this.pressHandler}>
            <Text>Edit</Text>
          </Button>
        </Content>
      </View>
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

export default connect(null, mapDispatchToProps)(withNavigation(EditExpense));
