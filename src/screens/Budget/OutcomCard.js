import React, { Component } from "react";
import styles from "./Budgetcss";
import AnimatedBar from "react-native-animated-bar";
import { View, Text } from "native-base";

export default class OutcomCard extends Component {
  state = {
    progress: 0
  };

  componentDidMount() {
    const interval = setInterval(() => {
      if (this.state.progress > 0.9) {
        return clearInterval(interval);
      }

      this.setState(state => {
        return {
          progress: state.progress + 0.1
        };
      });
    }, 1000);
  }
  render() {
    return (
      <View>
        <View style={{ flex: 1, flexDirection: "row", padding: 13 }}>
          <Text style={styles.cardtext4}>Overview</Text>
          <Text style={styles.cardtext3}>£500</Text>
        </View>
        <View style={{ paddingHorizontal: 20 }}>
          <AnimatedBar
            progress={this.state.progress}
            barColor="#7B7FAF"
            borderRadius={2}
            height={5}
          />
        </View>
      </View>
    );
  }
}
