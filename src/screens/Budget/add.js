import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  List,
  ListItem,
  Text,
  Button,
  Card,
  CheckBox,
  Body
} from "native-base";
import DatePicker from "../Operation/Commun/Datepickerr";
import { withNavigation } from "react-navigation";
import Categorypicker from "./Categorypicker";
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
        <Header />
        <Content>
          <List>
            <ListItem itemDivider>
              <Text>Add Monthly Budget</Text>
            </ListItem>
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
              </Form>
            </Card>
            <ListItem itemDivider>
              <Text>Setup Category Budget</Text>
            </ListItem>
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
                <Item>
                  <Categorypicker
                    Account={this.state.Account}
                    handleCatgoryChange={this.handleCatgoryChange}
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
              </Form>
            </Card>
          </List>
        </Content>
        <Button primary onPress={this.goBack}>
          <Text> Primary </Text>
        </Button>
      </Container>
    );
  }
}

export default withNavigation(add);
