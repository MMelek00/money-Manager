import React, { Component } from "react";
import { connect } from "react-redux";
import { View, ScrollView } from "react-native";
import { Text } from "native-base";
import { fetchTransactions } from "../../store/actions/transactions";
import Fab from "../../component/Fab";
import HeaderComponet from "./Header";
import CardComponent from "./CardComponent";
class Overview extends Component {
  componentDidMount = () => {
    this.props.fetchTransactionsProp();
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ height: 290 }}>
          <HeaderComponet />
          <Text
            style={{
              fontSize: 18,
              paddingTop: 38,
              paddingLeft: 10,
              fontFamily: "Roboto_medium",
              color: "grey"
            }}
          >
            Transaction Detail
          </Text>
        </View>
        <ScrollView style={{ flex: 1, paddingHorizontal: 10 }}>
          {this.props.transactions.map((transaction, index) => (
            <CardComponent transaction={transaction} key={index} />
          ))}
        </ScrollView>
        <Fab />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchTransactionsProp: transaction => {
      return dispatch(fetchTransactions());
    }
  };
};

export default connect(
  store => ({ transactions: store.transactions }),
  mapDispatchToProps
)(Overview);
