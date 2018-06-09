import React from "react";
import styles from "./Budgetcss";
import { withNavigation } from "react-navigation";
import { View, CardItem, Text, Right } from "native-base";
import moment from "moment";

const IncomeCard = ({ budgett, navigation }) => {
  return (
    <View style={{ paddingHorizontal: 10, paddingVertical: 20 }}>
      <CardItem
        style={{
          backgroundColor: "#9BA9D7",
          opacity: 0.7,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10
        }}
      >
        <Text style={styles.cardtextRight}>$ {budgett.Amount}</Text>
        <Right>
          <Text style={styles.cardtextLeft}>{budgett.Account} Operation</Text>
        </Right>
      </CardItem>
      <CardItem
        style={{
          backgroundColor: "#9BA9D7",
          opacity: 0.7,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10
        }}
      >
        <Text style={styles.cardtext2}>
          {moment(budgett.Date).format("YYYY-MM-DD")}
        </Text>
      </CardItem>
    </View>
  );
};
export default withNavigation(IncomeCard);
