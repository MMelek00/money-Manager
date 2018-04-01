import React, { Component } from "react";
import { View } from "react-native";
import * as R from "ramda";
import moment from "moment";
import { ListItem, Text, List } from "native-base";
import Expense from "./Expense";
class ExpensesByMonth extends Component {
  render() {
    var byType = R.groupBy(function(data) {
      var type = data.type;
      return type;
    });
    const expensesByType = byType(this.props.expense);
    return (
      <View>
        <ListItem itemDivider>
          {
            <Text>
              {moment(this.props.expense[0].date).format("MMMM YYYY")}
            </Text>
          }
        </ListItem>
        <List
          dataArray={Object.keys(expensesByType)}
          renderRow={key => <Expense expenses={expensesByType[key]} />}
        />
      </View>
    );
  }
}

export default ExpensesByMonth;
