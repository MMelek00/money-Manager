import React, { Component } from "react";
import { View } from "react-native";
import {
  ListItem,
  Badge,
  Left,
  Body,
  Right,
  Icon,
  Text,
  Card,
  CardItem
} from "native-base";

export default class Expense extends Component {
  state = { isOpen: false };

  handleTouch = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    const sum = this.props.expenses.reduce(
      (sum, value) => Number(sum) + Number(value.total),
      0
    );
    const occ = this.props.expenses.reduce((occ, value) => occ + 1, 0);
    let iconName;
    switch (this.props.expenses[0].type) {
      case "travelling":
        iconName = "ios-add";
        break;
      case "transport":
        iconName = "bus";
        break;

      default:
        iconName = "shopping-basket";
        break;
    }
    return (
      <View>
        <ListItem>
          <Card>
            <CardItem button onPress={this.handleTouch}>
              <Left>
                {/* <Icon
                  name={iconName}
                  style={{
                    borderStyle: "solid",
                    borderWidth: 2,
                    borderColor: "black",
                    borderRadius: 1000,
                    paddingTop: 2,
                    paddingLeft: 4
                  }}
                /> */}
              </Left>
              <Body>
                <Text>
                  {this.props.expenses[0].type.charAt(0).toUpperCase() +
                    this.props.expenses[0].type.slice(1)}
                </Text>
                <Text note>{occ} Transactions</Text>
              </Body>
              <Right>
                <Text note>{sum} of 1000</Text>
              </Right>
            </CardItem>
          </Card>
        </ListItem>
        {this.state.isOpen && (
          <Card
            dataArray={this.props.expenses}
            renderRow={expense => (
              <CardItem>
                <Text>
                  {expense.title}-{expense.date}-
                </Text>
                <Right>
                  <Badge>
                    <Text>{expense.total}</Text>
                  </Badge>
                </Right>
              </CardItem>
            )}
          />
        )}
      </View>
    );
  }
}

//
