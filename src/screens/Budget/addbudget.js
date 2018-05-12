import React, { Component } from "react";
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
import { LinearGradient } from "expo";
import DatePicker from "../Operation/Commun/Datepickerr";
import { withNavigation } from "react-navigation";
import Categorypicker from "./Categorypicker";
class addbudget extends Component {
  state = {};

  render() {
    return (
      <Container>
        <Header span>
          <LinearGradient
            colors={["#FE788D", "#FF9876"]}
            // style={{ height: 50 }}
            start={[0, 0]}
            end={[0.9, 0]}
          >
            <Body>
              <Title>Setup Category Budget</Title>
            </Body>
          </LinearGradient>
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

export default withNavigation(addbudget);
