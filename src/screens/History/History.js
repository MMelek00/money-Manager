import React, { Component } from "react";
import * as R from "ramda";
import { Container, View, List } from "native-base";
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

export default class History extends Component {
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
        </View>
      </Container>
    );
  }
}
