import React, { Component } from "react";
import * as R from "ramda";
import { Container, View, Button, Icon, Fab, List } from "native-base";
import ExpensesByMonth from "./ExpensesByMonth";
import moment from "moment";

const asyncStorage = [
  {
    id: "1",
    title: "zara",
    date: "01/01/2017",
    total: "200",
    type: "shopping"
  },
  {
    id: "2",
    title: "exist",
    date: "01/01/2017",
    total: "200",
    type: "shopping"
  },
  {
    id: "3",
    title: "BSAQ",
    date: "02/02/2017",
    total: "200",
    type: "shopping"
  },
  {
    id: "4",
    title: "Taxi",
    date: "05/01/2017",
    total: "200",
    type: "transport"
  },
  {
    id: "5",
    title: "Bus",
    date: "05/02/2017",
    total: "200",
    type: "transport"
  },
  {
    id: "6",
    title: "Kuala lampur",
    date: "05/01/2017",
    total: "200",
    type: "travelling"
  },
  {
    id: "7",
    title: "Berlin",
    date: "02/04/2017",
    total: "200",
    type: "travelling"
  },
  {
    id: "8",
    title: "Tokyo",
    date: "02/04/2017",
    total: "200",
    type: "travelling"
  },
  {
    id: "8",
    title: "Tokyo",
    date: "01/01/2018",
    total: "200",
    type: "travelling"
  }
];

export default class Overview extends Component {
  state = {
    active: false
  };

  render() {
    const byMonth = R.groupBy(function(data) {
      const date = data.date;
      return moment(date).format("MMMM YYYY");
    });
    const expensesByDate = byMonth(asyncStorage);
    return (
      <Container>
        <View
          style={{
            flex: 1
          }}
        >
          <List
            dataArray={Object.keys(expensesByDate)}
            renderRow={key => <ExpensesByMonth expense={expensesByDate[key]} />}
          />
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
        </View>
      </Container>
    );
  }
}
