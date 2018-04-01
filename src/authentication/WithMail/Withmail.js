import React, { Component } from "react";
import { Container, Tab, Tabs, TabHeading, Text } from "native-base";
import Registre from "./register/Registre";
import Signin from "./signin/Signin";
import { Col, Row, Grid } from "react-native-easy-grid";
export default class Withmail extends Component {
  render() {
    return (
      <Container>
        <Grid>
          <Row style={{ backgroundColor: "#841584", height: 200 }}>
            <Col />
          </Row>
          <Row>
            <Tabs>
              <Tab
                heading={
                  <TabHeading>
                    <Text>LOG IN</Text>
                  </TabHeading>
                }
              >
                <Registre />
              </Tab>
              <Tab
                heading={
                  <TabHeading>
                    <Text>SIGN IN</Text>
                  </TabHeading>
                }
              >
                <Signin />
              </Tab>
            </Tabs>
          </Row>
        </Grid>
      </Container>
    );
  }
}
