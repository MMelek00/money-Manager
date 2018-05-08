import React, { Component } from "react";
import { View } from "react-native";
import { CardItem, Text, Container } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";

import styles from "./Budgetcss";
export default class Header extends Component {
  render() {
    return (
      <Container>
        <View style={styles.HeaderContainer}>
          <Text style={styles.Headertext}>Budget</Text>
        </View>
        <Grid>
          <Row>
            <Col style={styles.HeaderRow}>
              <CardItem style={{ borderRadius: 10, height: 80 }}>
                <Row>
                  <Col>
                    <Text style={{ fontFamily: "Roboto" }}>Inscomes</Text>
                    <Text style={styles.HeaderNum}>£ 26000</Text>
                  </Col>
                </Row>
              </CardItem>
            </Col>
            <Col style={styles.HeaderRow}>
              <CardItem style={{ borderRadius: 10, height: 80 }}>
                <Row>
                  <Col>
                    <Text style={{ fontSize: 15, fontFamily: "Roboto" }}>
                      Expenses
                    </Text>
                    <Text style={styles.HeaderNum}>£ 15.200</Text>
                  </Col>
                </Row>
              </CardItem>
            </Col>
          </Row>
        </Grid>
      </Container>
    );
  }
}
