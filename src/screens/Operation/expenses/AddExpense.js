import React, { Component } from "react";
import { StyleSheet, Image } from "react-native";
import { connect } from "react-redux";
import {
  View,
  Content,
  Item,
  Input,
  Button,
  Icon,
  Text,
  Title
} from "native-base";
import { addTransaction } from "../../../store/actions/transactions";
import { Ionicons } from "@expo/vector-icons";
import Accountpicker from "../Commun/Accountpicker";
import DatePicker from "../Commun/Datepickerr";
//import place from "../Commun/Place";
import { withNavigation } from "react-navigation";
import moment from "moment";

class AddExpense extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Amount: "",
      Date: "",
      Description: "",
      Category: "Shopping",
      Account: "Cash",
      Place: "",
      isClicked: false
    };
  }
  componentWillMount = () => {
    this.setState({ Date: moment(new Date()).format("YYYY-MM-DD") });
  };
  pressHandler = () => {
    this.setState({ isClicked: true });
    const { Amount, Date, Description, Account, Place } = this.state;
    const { params } = this.props.navigation.state;
    const Category = params ? params.Category : null;
    this.props.addTransactionProp({
      id: 1,
      Amount,
      Date,
      Description,
      Category,
      Account,
      Place,
      Type: "expense"
    });

    this.props.addExpense(Amount);
    this.props.navigation.pop(2);
  };
  handleDateChange = value => {
    this.setState({ Date: value });
  };
  goBack = () => {
    this.props.navigation.pop(2);
  };
  handleAccountChange = value => {
    this.setState({ Account: value });
  };
  render() {
    const { params } = this.props.navigation.state;
    const Category = params ? params.Category : null;
    let imageUri;
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
            <Item>
              <Ionicons style={styles.iconStyle} name="ios-flag" />
              <Input placeholder="Place" />
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
    //backgroundColor: "white",
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
    addTransactionProp: transaction => {
      return dispatch(addTransaction(transaction));
    },
    addExpense: Amount => {
      dispatch({
        type: "ADD_EXPENSE",
        payload: Amount
      });
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(withNavigation(AddExpense));
