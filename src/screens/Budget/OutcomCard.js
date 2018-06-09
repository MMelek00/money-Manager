import React from "react";
import styles from "./Budgetcss";
import * as Progress from "react-native-progress";
import { View, Text, Left, Right } from "native-base";
import { withNavigation } from "react-navigation";

const OutcomCard = ({ budget, navigation }) => {
  return (
    <View>
      <View style={{ flex: 1, flexDirection: "row", padding: 13 }}>
        <Left>
          <Text style={styles.cardtext4}>{budget.Category}</Text>
        </Left>
        <Right>
          <Text style={styles.cardtext3}>$ {budget.Amount}</Text>
        </Right>
      </View>
      <View style={{ paddingHorizontal: 20 }}>
        <Progress.Bar progress={0.5} width={380} color="red" />
      </View>
    </View>
  );
};
export default withNavigation(OutcomCard);
