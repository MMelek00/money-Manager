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
  Title,
  Left,
  Icon
} from "native-base";
import { connect } from "react-redux";
import DatePicker from "../Operation/Commun/Datepickerr";
import AccountPicker from "../Operation/Commun/Accountpicker";
import { withNavigation } from "react-navigation";
import moment from "moment";
import { addBudgetIncome } from "../../store/actions/Budget";

class budgetIncome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      Amount: "cash",
      Date: "",
      Category: "Shopping"
    };
  }
  componentWillMount = () => {
    this.setState({ Date: moment(new Date()).format("YYYY-MM-DD") });
  };
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
    this.props.addbudgetIncome({
      id: 1,
      Amount,
      Date,
      Account,
      checked
    });
    this.props.addIncome(Amount);
    this.props.navigation.pop(1);
  };
  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Setup Category Budget</Title>
          </Body>
          <Left>
            <Button
              transparent
              onPress={this.goBack}
              style={{
                backgroundColor: "#f1404b",
                position: "absolute",
                borderRadius: 100,
                margin: 10,
                right: 0
              }}
            >
              <Icon style={{ color: "#FFFFFF" }} name="close" />
            </Button>
          </Left>
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
    addbudgetIncome: budgett => {
      return dispatch(addBudgetIncome(budgett));
    },
    addIncome: Amount => {
      dispatch({
        type: "ADD_INCOMES",
        payload: Amount
      });
    }
  };
};
export default connect(
  null,
  mapDispatchToProps
)(withNavigation(budgetIncome));
