import React from "react";
import moment from "moment";
import { connect } from "react-redux";
import { StackedBarChart, XAxis, YAxis, Grid } from "react-native-svg-charts";
import { View } from "react-native";
const R = require("ramda");

class ExpeIncomeChart extends React.Component {

  render() {
    const axesSvg = { fontSize: 10, fill: "grey" };
    const verticalContentInset = { top: 10, bottom: 10 };
    const xAxisHeight = 30;

    var startOfWeek = moment().startOf("isoWeek");
    var endOfWeek = moment().endOf("isoWeek");
    var days = [];
    var day = startOfWeek;

    while (day <= endOfWeek) {
      days.push(day.toDate());
      day = day.clone().add(1, "d");
    }

    let data = [...Array(7)].map((_, i) => {
      const Date = moment(days[i]).date();
      return { Date, expense: 0, income: 0 };
    });

    this.props.transactions.forEach(transaction => {
      const dayOfTransaction = moment(transaction.Date).date();
      const indexToAdd = R.findIndex(R.propEq("Date", dayOfTransaction))(data);
      const previousAmount = data[indexToAdd][transaction.Type];
      data[indexToAdd][transaction.Type] = Number(previousAmount) + Number(transaction.Amount);
    });

    const colors = ["#E7475E", "#7ebc59",];
    const keys = ["expense", "income",];
    return (
      <View style={{ height: 450, padding: 20, flexDirection: "row" }}>
        <YAxis
          data={data}
          style={{ marginBottom: xAxisHeight }}
          formatLabel={(value, index) => Number(value.expense) + Number(value.income)}
          contentInset={verticalContentInset}
          svg={axesSvg}
        />
        <View style={{ flex: 1, marginLeft: 10 }}>
          <StackedBarChart
            style={{ height: 270 }}
            keys={keys}
            colors={colors}
            data={data}
            showGrid={false}
            contentInset={{ top: 30, bottom: 30 }}

          >
            <Grid />
          </StackedBarChart>
          <XAxis
            style={{ height: xAxisHeight }}
            data={days}
            contentInset={{ left: 10, right: 10 }}
            svg={axesSvg}
          />
        </View>
      </View>
    );
  }
}

export default connect(
  store => ({ transactions: store.transactions })
)(ExpeIncomeChart);
