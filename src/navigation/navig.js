import React from "react";
import Overview from "./src/screens/Overview/Overview";
import Distribution from "./src/screens/Distribution/Distribution";
import History from "./src/screens/History/History";
import Statistics from "./src/screens/Statistics/Statistics";
import BudgetScreen from "./src/screens/Budget/BudgetScreen";

import { TabNavigator, TabBarBottom } from "react-navigation";
import Ionicons from "react-native-vector-icons/Ionicons";

export default TabNavigator(
  {
    Overview: { screen: Overview },
    Distribution: { screen: Distribution },
    History: { screen: History },
    Statistics: { screen: Statistics },
    Budget: { screen: BudgetScreen }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Overview") {
          iconName = `ios-information-circle${focused ? "" : "-outline"}`;
        } else if (routeName === "History") {
          iconName = `ios-briefcase${focused ? "" : "-outline"}`;
        } else if (routeName === "Statistics") {
          iconName = `ios-pie${focused ? "" : "-outline"}`;
        } else if (routeName === "Budget") {
          iconName = `ios-briefcase${focused ? "" : "-outline"}`;
        } else if (routeName === "Distribution") {
          iconName = `ios-calendar${focused ? "" : "-outline"}`;
        }
        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "gray"
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: "bottom",
    animationEnabled: false,
    swipeEnabled: false
  }
);
