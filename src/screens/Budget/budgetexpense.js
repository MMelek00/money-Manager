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
import { connect } from "react-redux";
import DatePicker from "../Operation/Commun/Datepickerr";
import Categorypicker from "./Categorypicker";
import { withNavigation } from "react-navigation";
import moment from "moment";
import { addBudget } from "../../store/actions/Budget";
class BudgetExpense extends Component {
  constructor() {
    super();
    this.state = {
      checked: false,
      Amount: "",
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
  handleCategoryChange = value => {
    this.setState({ Category: value });
  };
  pressHandler = () => {
    this.setState({ isClicked: true });
    const { Amount, Date, checked, Category } = this.state;
    this.props.addbudgetProp({
      Amount,
      Date,
      checked,
      Category
    });
    this.props.navigation.pop(1);
  };
  render() {
    return (
      <Container>
        <Header>
          <Left />
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
                <Categorypicker
                  Category={this.state.Category}
                  handleCategoryChange={this.handleCategoryChange}
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
    addbudgetProp: BudgetE => {
      return dispatch(addBudget(BudgetE));
    }
  };
};
export default connect(
  null,
  mapDispatchToProps
)(withNavigation(BudgetExpense));
