import React, { Component } from "react";
import styles from "./Budgetcss";
import { Container, Text, Content } from "native-base";

import Header from "./Header";
import Cardi from "./card";
export default class BudgetScreen extends Component {
  render() {
    return (
      <Container style={{ flex: 1 }}>
        <Header style={{ flex: 2 }} />
        <Content
          style={{
            top: -70
          }}
        >
          <Text style={styles.hometext}> Incomes</Text>
          <Cardi />
        </Content>
      </Container>
    );
  }
}
