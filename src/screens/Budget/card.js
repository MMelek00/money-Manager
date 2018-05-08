import React, { Component } from "react";
import styles from "./Budgetcss";

import { Card, CardItem, Text, Right } from "native-base";
export default class Cardi extends Component {
  render() {
    return (
      <Card>
        <CardItem
          style={{
            backgroundColor: "#9BA9D7"
          }}
        >
          <Text style={styles.cardtext}>+£1 400</Text>
          <Right>
            <Text style={styles.cardtext}>Bank Operation</Text>
          </Right>
        </CardItem>
        <CardItem
          style={{
            backgroundColor: "#9BA9D7"
          }}
        >
          <Text style={styles.cardtext}>Dec 6, 03:33 PM</Text>
        </CardItem>
      </Card>
    );
  }
}
