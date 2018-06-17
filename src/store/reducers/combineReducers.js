import { persistCombineReducers } from "redux-persist";
import { combineReducers } from "redux";
import transactions from "./transactions";
import statistics from "./statistics";
import budgets from "./budgets";
import budgetI from "./budgetI";
import { AsyncStorage } from "react-native";

const config = {
  key: "root",
  storage: AsyncStorage
};

const rehydrated = (state = false, action) => {
  switch (action.type) {
    case "persist/REHYDRATE":
      return true;
    default:
      return state;
  }
};

export default persistCombineReducers(config, {
  rehydrated,
  transactions,
  statistics,
  budgets,
  budgetI
});
