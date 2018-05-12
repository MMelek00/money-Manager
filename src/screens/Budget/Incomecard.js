import React, { Component } from "react";
import styles from "./Budgetcss";

import { View, CardItem, Text, Right } from "native-base";
export default class IncomeCard extends Component {
  render() {
    return (
      <View style={{ paddingHorizontal: 10, paddingVertical: 20 }}>
        <CardItem
          style={{
            backgroundColor: "#9BA9D7",
            opacity: 0.7,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10
          }}
        >
          <Text style={styles.cardtextRight}>+£1 400</Text>
          <Right>
            <Text style={styles.cardtextLeft}>Bank Operation</Text>
          </Right>
        </CardItem>
        <CardItem
          style={{
            backgroundColor: "#9BA9D7",
            opacity: 0.7,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10
          }}
        >
          <Text style={styles.cardtext2}>Dec 6, 03:33 PM</Text>
        </CardItem>
      </View>
    );
  }
}
