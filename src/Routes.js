import React from "react";
import Overview from "./screens/OverView/Overview";
import Profile from "./screens/Profile/Profile";
import History from "./screens/History/History";
import Statistics from "./screens/Statistics/Statistics";
import BudgetScreen from "./screens/Budget/BudgetScreen";

import AddExpense from "./screens/Operation/expenses/AddExpense";
import EditExpense from "./screens/Operation/expenses/EditExpense";
import AddIncomes from "./screens/Operation/AddIncomes/AddIncomes";
import CategorySelect from "./screens/Operation/Commun/categorySelect/CategorySelect";
import IncomeSelect from "./screens/Operation/Commun/categorySelect/IncomeSelect";

import Login from "./screens/Authentication/login/Login";
import Signup from "./screens/Authentication/login/Signup";
import SocialButtons from "./screens/Authentication/login/SocialButtons";
import BudgetIncome from "./screens/Budget/budgetIncome";
import BudgetExpense from "./screens/Budget/budgetexpense";
import {
  TabNavigator,
  StackNavigator,
  TabBarBottom,
  SwitchNavigator
} from "react-navigation";
import { Ionicons } from "@expo/vector-icons";
import AuthLoadingScreen from "./screens/Authentication/AuthLoadingScreen";

const Main = TabNavigator(
  {
    Overview: { screen: Overview },
    History: { screen: History },
    Statistics: { screen: Statistics },
    Budget: { screen: BudgetScreen },
    Profile: { screen: Profile }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Overview") {
          iconName = `ios-home${focused ? "" : "-outline"}`;
        } else if (routeName === "History") {
          iconName = `ios-time${focused ? "" : "-outline"}`;
        } else if (routeName === "Statistics") {
          iconName = `ios-pie${focused ? "" : "-outline"}`;
        } else if (routeName === "Budget") {
          iconName = `ios-podium${focused ? "" : "-outline"}`;
        } else if (routeName === "Profile") {
          iconName = `ios-person${focused ? "" : "-outline"}`;
        }
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

const AppStack = StackNavigator(
  {
    Main: {
      screen: Main
    },
    AddExpense: {
      screen: AddExpense
    },
    EditExpense: {
      screen: EditExpense
    },
    AddIncomes: {
      screen: AddIncomes
    },
    CategorySelect: {
      screen: CategorySelect
    },
    IncomeSelect: {
      screen: IncomeSelect
    },
    BudgetExpense: {
      screen: BudgetExpense
    },
    BudgetIncome: {
      screen: BudgetIncome
    }
  },
  {
    headerMode: "none"
  }
);
const AuthStack = StackNavigator(
  {
    Login: {
      screen: Login
    },

    Signup: {
      screen: Signup
    },
    SocialButtons: {
      screen: SocialButtons
    }
  },
  {
    headerMode: "none"
  }
);

export default SwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack
  },
  {
    initialRouteName: "AuthLoading"
  }
);
