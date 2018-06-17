import React, { Component } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { Calendar } from "react-native-calendars";
import { connect } from "react-redux";
import moment from "moment";
import { LinearGradient } from "expo";

class AgendaScreen extends Component {
  state = {
    items: {},
    currentDate: "2018-06-12"
  };

  componentWillMount = () => {
    this._bootstrapData();
  };

  _bootstrapData = () => {
    this.setState({ currentDate: moment().format("YYYY-MM-DD") });
    let _items = {};
    this.props.transactions.forEach(element => {
      if (_items[element.Date] === undefined) {
        _items[element.Date] = [
          { Description: element.Description, Amount: element.Amount }
        ];
      } else {
        _items[element.Date].push({
          Description: element.Description,
          Amount: element.Amount
        });
      }
    });
    this.setState({ items: _items });
  };

  componentWillReceiveProps = () => {
    this._bootstrapData();
  };

  renderItem(item) {
    return (
      <LinearGradient
        colors={["#FE788D", "#FF9876"]}
        style={styles.item}
        start={[0, 0]}
        end={[0.9, 0]}
      >
        <Text
          style={{
            fontFamily: "Roboto_medium",
            color: "white",
            fontSize: 25
          }}
        >
          {item.item.Description}
        </Text>
        <Text
          style={{
            fontFamily: "Roboto_medium",
            color: "white",
            fontSize: 30,
            fontWeight: "bold"
          }}
        >
          {item.item.Amount} £
        </Text>
      </LinearGradient>
    );
  }

  render() {
    const itemsToDisplay = this.state.items[this.state.currentDate];
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Calendar
            // current={this.state.currentDate}
            onDayPress={day => this.setState({ currentDate: day.dateString })}
          />
        </View>
        {!itemsToDisplay ? (
          <View style={styles.emptyDate}>
            <Text>No Transactions in this day</Text>
          </View>
        ) : (
          <FlatList
            style={{ flex: 1 }}
            data={itemsToDisplay}
            renderItem={this.renderItem}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    borderRadius: 5,
    padding: 10,
    margin: 10,
    flexDirection: "row",
    height: 60,
    justifyContent: "space-between",
    alignItems: "center"
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30
  }
});

export default connect(store => ({ transactions: store.transactions }))(
  AgendaScreen
);
