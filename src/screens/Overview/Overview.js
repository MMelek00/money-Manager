import React, { Component } from "react";
import { Col, Row, Grid } from "react-native-easy-grid";
import {
  Content,
  Header,
  Container,
  View,
  Text,
  Button,
  Icon,
  Fab
} from "native-base";
export default class History extends Component {
  state = {
    active: false
  };

  render() {
    return (
      <Container>
        <Header />
        <Content>
          <View>
            <Grid>
              <Row style={{ backgroundColor: "#0F1121", height: 40 }}>
                <Col style={{ backgroundColor: "#635DB7" }}>
                  <Text>12.021£</Text>
                </Col>
              </Row>
              <Row style={{ backgroundColor: "#0F1121", height: 30 }}>
                <Col style={{ backgroundColor: "#635DB7" }}>
                  <Text>Income</Text>
                </Col>
                <Col style={{ backgroundColor: "#00CE9F" }}>
                  <Text>Expenses</Text>
                </Col>
                <Col style={{ backgroundColor: "#635DB7" }}>
                  <Text>Balance</Text>
                </Col>
              </Row>
              <Row style={{ backgroundColor: "#0F1121", height: 30 }}>
                <Col style={{ backgroundColor: "#635DB7" }}>
                  <Text>5.600£</Text>
                </Col>
                <Col style={{ backgroundColor: "#00CE9F" }}>
                  <Text>4.500£</Text>
                </Col>
                <Col style={{ backgroundColor: "#635DB7" }}>
                  <Text>1100£</Text>
                </Col>
              </Row>
            </Grid>
          </View>
        </Content>
        <Fab
          active={this.state.active}
          direction="up"
          containerStyle={{}}
          style={{ backgroundColor: "#5067FF" }}
          position="bottomRight"
          onPress={() => this.setState({ active: !this.state.active })}
        >
          <Icon name="share" />
          <Button style={{ backgroundColor: "#34A34F" }}>
            <Icon name="logo-whatsapp" />
          </Button>
          <Button style={{ backgroundColor: "#3B5998" }}>
            <Icon name="logo-facebook" />
          </Button>
          <Button disabled style={{ backgroundColor: "#DD5144" }}>
            <Icon name="mail" />
          </Button>
        </Fab>
      </Container>
    );
  }
}
