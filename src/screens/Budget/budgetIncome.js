import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  ListItem,
  Text,
  Button,
  Card,
  CheckBox,
  Body,
  Title
} from "native-base";
import { connect } from "react-redux";
import DatePicker from "../Operation/Commun/Datepickerr";
import AccountPicker from "../Operation/Commun/Accountpicker";
import { withNavigation } from "react-navigation";
class budgetIncome extends Component {
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
  handleAccountChange = value => {
    this.setState({ Account: value });
  };
  pressHandler = () => {
    this.setState({ isClicked: true });
    const { Amount, Date, checked, Account } = this.state;
    this.props.budgetIncome({
      id: 1,
      Amount,
      Date,
      checked,
      Account
    });
    this.props.navigation.pop(1);
  };
  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Setup Category Budget</Title>
          </Body>
        </Header>
        <Content style={{ paddingTop: 150 }}>
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
                <AccountPicker
                  Account={this.state.Account}
                  handleAccountChange={this.handleAccountChange}
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
              <Button block info onPress={this.pressHandler}>
                <Text>Add</Text>
              </Button>
            </Form>
          </Card>
        </Content>
      </Container>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    budgetIncome: budgett => {
      dispatch({
        type: "ADD_BUDGETIncome",
        payload: budgett
      });
    }
  };
};
export default connect(null, mapDispatchToProps)(withNavigation(budgetIncome));
