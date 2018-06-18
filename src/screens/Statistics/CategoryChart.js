import React from "react";
import { connect } from "react-redux";
import { Text, View, Dimensions } from "react-native";
import { PieChart } from "react-native-svg-charts";

class Categorychart extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedSlice: {
        label: "",
        value: 0
      },
      labelWidth: 0
    };
  }
  render() {
    const { labelWidth, selectedSlice } = this.state;
    const { label, value } = selectedSlice;
    let keys = [];

    this.props.transactions.reduce((res, value) => {
      if (!res[value.Category]) {
        res[value.Category] = {
          Amount: 0,
          Category: value.Category
        };
        keys.push(res[value.Category]);
      }
      res[value.Category].Amount = Number(res[value.Category].Amount) + Number(value.Amount);
      return res;
    }, {});
    const colors = [
      "#600080",
      "#9900cc",
      "#c61aff",
      "#c42af7",
      "#c748f2",
      "#cb5def",
      "#e187ff"
    ];
    const data = keys.map((key, index) => {

      return {
        key: key.Category,
        value: key.Amount,
        svg: { fill: colors[index] },
        onPress: () =>
          this.setState({ selectedSlice: { label: key.Category, value: key.Amount } })
      };
    });
    const deviceWidth = Dimensions.get("window").width;

    return (
      <View style={{ flex: 1 }}>
        <Text
          style={{
            fontFamily: "Roboto_medium",
            color: "tomato",
            fontSize: 25,
          }}
        >
          {" "}
          Division of Expenses Per Category
          </Text>
        <PieChart
          style={{ flex: 1, justifyContent: "center" }}
          outerRadius={"80%"}
          innerRadius={"45%"}
          data={data}
        />
        <Text
          onLayout={({
            nativeEvent: {
              layout: { width }
            }
          }) => {
            this.setState({ labelWidth: width });
          }}
          style={{
            position: "absolute",
            left: deviceWidth / 2 - labelWidth / 2,
            textAlign: "center",
            top: 165
          }}
        >
          {`${label} \n ${value} Dt`}
        </Text>
      </View>
    );
  }
}

export default connect(
  store => ({ transactions: store.transactions })
)(Categorychart);
