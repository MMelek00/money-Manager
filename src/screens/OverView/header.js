import React, { Component } from "react";
import { Col, Row, Grid } from "react-native-easy-grid";
import { Content, Container, View } from "native-base";
export default class HeaderComponet extends Component {
  render() {
    return (
      <View>
        <Grid>
          <Row style={{ backgroundColor: "#635DB7", height: 200 }} />
          <Row style={{ backgroundColor: "#FFFFFF", height: 200 }} />
        </Grid>
      </View>
    );
  }
}
