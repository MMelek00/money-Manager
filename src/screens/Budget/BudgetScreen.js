import React, { Component } from "react";
import styles from "./Budgetcss";
import { Text, Content, ListItem } from "native-base";
import { View, ScrollView } from "react-native";

import BudgetFab from "../../component/BudgetFab";
import OutcomCard from "./OutcomCard";
import Header from "./Header";
import IncomeCard from "./Incomecard";
import { connect } from "react-redux";
class BudgetScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ height: 250 }}>
          <Header />
        </View>
        <Content style={{ flex: 1 }}>
          <View style={{ height: 200 }}>
            <ListItem itemDivider>
              <Text style={styles.hometext}> Incomes</Text>
            </ListItem>
            <ScrollView>
              {this.props.budgetI.map((budgett, index) => (
                <IncomeCard budgett={budgett} key={index} />
              ))}
            </ScrollView>
          </View>
          <View style={{ flex: 2 }}>
            <ListItem itemDivider>
              <Text style={styles.hometext}> Outcomes</Text>
            </ListItem>
            <ScrollView>
              {this.props.budgets.map((budget, index) => (
                <OutcomCard budget={budget} key={index} />
              ))}
            </ScrollView>
          </View>
        </Content>
        <BudgetFab />
      </View>
    );
  }
}
export default connect(store => ({
  budgets: store.budgets,
  budgetI: store.budgetI
}))(BudgetScreen);
