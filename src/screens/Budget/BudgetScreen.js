import React, { Component } from "react";
import styles from "./Budgetcss";
import { Text, Content, View, ListItem } from "native-base";

import OutcomCard from "./OutcomCard";
import Header from "./Header";
import IncomeCard from "./Incomecard";
import ActionButton from "react-native-action-button";
export default class BudgetScreen extends Component {
  addbudget = () => {
    this.props.navigation.navigate("add");
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ height: 250 }}>
          <Header />
        </View>
        <Content style={{ flex: 1 }}>
          <View>
            <ListItem itemDivider>
              <Text style={styles.hometext}> Incomes</Text>
            </ListItem>
            <View>
              <IncomeCard />
            </View>
          </View>
          <View>
            <ListItem itemDivider>
              <Text style={styles.hometext}> Outcomes</Text>
            </ListItem>
            <View>
              <OutcomCard />
            </View>
          </View>
        </Content>
        <ActionButton
          buttonColor="#5068F8"
          size={50}
          position="center"
          onPress={this.addbudget}
        />
      </View>
    );
  }
}
