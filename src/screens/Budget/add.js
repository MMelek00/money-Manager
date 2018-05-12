import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Title,
  ListItem,
  Text,
  Button,
  Card,
  CheckBox,
  Body,
  Left
} from "native-base";
import { LinearGradient } from "expo";
import DatePicker from "../Operation/Commun/Datepickerr";
import { withNavigation } from "react-navigation";
class add extends Component {
  constructor() {
    super();
    this.state = {
      checked: false,
      Amount: "",
      Date: new Date(),
      Category: "Shopping"
    };
  }
  CheckBoxTest() {
    this.setState({
      check: !this.state.check
    });
  }
  goBack = () => {
    this.props.navigation.pop(1);
  };
  handleDateChange = value => {
    this.setState({ Date: value });
  };
  render() {
    return (
      <Container>
        <Header>
          <LinearGradient
            colors={["#FE788D", "#FF9876"]}
            //  style={{ flex: 1 }}
            start={[0, 0]}
            end={[0.9, 0]}
          />
          <Left />
          <Body>
            <Title>Setup Category Budget</Title>
          </Body>
        </Header>
        <Content>
          <Card>
            <Form>
              <Item>
                <Input
                  placeholder="Amount"
                  keyboardType="numeric"
                  autoCorrect={false}
                  autoCapitalize="none"
                  onChangeText={Amount => this.setState({ Amount })}
                />
              </Item>
              <Item>
                <DatePicker
                  date={this.state.Date}
                  handleDateChange={this.handleDateChange}
                />
              </Item>
              <ListItem>
                <CheckBox
                  checked={this.state.checked}
                  onPress={() =>
                    this.setState({ checked: !this.state.checked })
                  }
                  color="green"
                />
                <Body>
                  <Text>Repeating evry month</Text>
                </Body>
              </ListItem>
              <Item />
              <Button block info onPress={this.goBack}>
                <Text>Add</Text>
              </Button>
            </Form>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default withNavigation(add);
