import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Item,
  Input,
  Body,
  Icon,
  Button,
  Left,
  Title
} from "native-base";
import Accountpicker from "./Accountpicker";
import DatePicker from "./Datepickerr";
import PickerCategory from "./pickerCategory";
export default class Addoperation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Amount: "",
      Date: DatePicker.state,
      Description: "",
      Category: PickerCategory.state,
      Account: Accountpicker.state,
      Place: ""
    };
  }
  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: "#0F1121" }}>
          <Left>
            <Button transparent>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title style={{ color: "#FFFFFF" }}>Add New Expense</Title>
          </Body>
        </Header>
        <Content
          style={{
            height: 300,
            paddingHorizontal: 20,
            backgroundColor: "#0F1121"
          }}
        >
          <Item>
            <Icon active name="Money" />
            <Input
              placeholder="Money"
              style={{ color: "#FFFFFF" }}
              returnKeyType="next"
              keyboardType="numeric"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={Amount => this.setState({ Amount })}
            />
          </Item>
          <Item>
            <DatePicker />
          </Item>
          <Item>
            <Icon active name="" />
            <Input
              placeholder="Description"
              style={{ color: "#FFFFFF" }}
              returnKeyType="next"
              keyboardType="default"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={Description => this.setState({ Description })}
            />
          </Item>
          <Item>
            <Icon active name="" />
            <PickerCategory />
          </Item>
          <Item>
            <Accountpicker />
          </Item>
          <Item>
            <Icon active name="" />
            <Input placeholder="Place" style={{ color: "#FFFFFF" }} />
          </Item>
        </Content>
      </Container>
    );
  }
}
