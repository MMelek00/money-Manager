import React, { Component } from "react";
import { View } from "react-native";
import { LinearGradient } from "expo";
import { CardItem, Text } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import { connect } from "react-redux";
import styles from "./Budgetcss";
class Header extends Component {
  render() {
    return (
      <LinearGradient
        colors={["#FE788D", "#FF9876"]}
        style={{ height: 225 }}
        start={[0, 0]}
        end={[0.9, 0]}
      >
        <View style={styles.HeaderContainer}>
          <Text style={styles.Headertext}>Budget</Text>
        </View>
        <Grid>
          <Row>
            <Col style={styles.HeaderRow}>
              <CardItem style={{ borderRadius: 10, height: 80 }}>
                <Row>
                  <Col>
                    <Text style={{ fontFamily: "Roboto", opacity: 0.5 }}>
                      Inscomes
                    </Text>
                    <Text style={styles.HeaderNum}>
                      {this.props.statistics.income}£
                    </Text>
                  </Col>
                </Row>
              </CardItem>
            </Col>
            <Col style={styles.HeaderRow}>
              <CardItem style={{ borderRadius: 10, height: 80 }}>
                <Row>
                  <Col>
                    <Text style={{ fontFamily: "Roboto", opacity: 0.5 }}>
                      Expenses
                    </Text>
                    <Text style={styles.HeaderNum}>
                      {this.props.statistics.expenses}£
                    </Text>
                  </Col>
                </Row>
              </CardItem>
            </Col>
          </Row>
        </Grid>
      </LinearGradient>
    );
  }
}
export default connect(store => ({ statistics: store.statistics }))(Header);
