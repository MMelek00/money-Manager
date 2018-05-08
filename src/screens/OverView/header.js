import React, { Component } from "react";
import { connect } from "react-redux";
import { Col, Row, Grid } from "react-native-easy-grid";
import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo";
import { CardItem, Text, Icon } from "native-base";

class HeaderComponet extends Component {
  render() {
    return (
      <View>
        <LinearGradient
          colors={["#FE788D", "#FF9876"]}
          style={styles.GradientStyle}
          start={[0, 0]}
          end={[0.9, 0]}
        />
        <View style={styles.ContainerStyle}>
          <Text
            style={{
              fontSize: 25,
              fontFamily: "Roboto_medium",
              color: "white",
              textAlign: "center"
            }}
          >
            Total
          </Text>
          <Text
            style={{
              padding: 20,
              fontSize: 65,
              color: "white",
              textAlign: "center"
            }}
          >
            {this.props.statistics.total}£
          </Text>
          <Grid>
            <Row>
              <Col style={styles.RowStyle}>
                <CardItem style={{ borderRadius: 7 }}>
                  <Row>
                    <Col>
                      <Icon
                        active
                        name="arrow-up"
                        style={{ fontSize: 40, color: "green" }}
                      />
                    </Col>
                    <Col>
                      <Text style={styles.NumStyle}>
                        {this.props.statistics.income}
                      </Text>
                      <Text style={{ fontFamily: "Roboto_medium" }}>
                        Inscomes
                      </Text>
                    </Col>
                  </Row>
                </CardItem>
              </Col>
              <Col style={styles.RowStyle}>
                <CardItem style={{ borderRadius: 7 }}>
                  <Row>
                    <Col>
                      <Icon
                        active
                        name="arrow-down"
                        style={{ fontSize: 40, color: "red" }}
                      />
                    </Col>
                    <Col>
                      <Text style={styles.NumStyle}>
                        {this.props.statistics.expenses}
                      </Text>
                      <Text
                        style={{ fontSize: 15, fontFamily: "Roboto_medium" }}
                      >
                        Expenses
                      </Text>
                    </Col>
                  </Row>
                </CardItem>
              </Col>
            </Row>
          </Grid>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  GradientStyle: {
    height: 225
  },
  ContainerStyle: {
    paddingHorizontal: 10,
    position: "absolute",
    zIndex: 2,
    left: 0,
    right: 0,
    top: 30,
    aspectRatio: 1.5
  },
  RowStyle: { padding: 10 },
  TextStyle: {
    fontSize: 17
  },
  NumStyle: {
    fontSize: 20,
    fontFamily: "Roboto_medium",
    fontWeight: "bold"
  }
});

export default connect(store => ({ statistics: store.statistics }))(
  HeaderComponet
);
