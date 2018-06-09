import { combineReducers } from "redux";
import transactions from "./transactions";
import statistics from "./statistics";
import budgets from "./budgets";
import budgetI from "./budgetI";
import { reducer as formReducer } from "redux-form";
export default combineReducers({
  transactions,
  statistics,
  budgets,
  budgetI,
  Login: formReducer
});
