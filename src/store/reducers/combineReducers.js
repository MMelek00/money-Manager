import { combineReducers } from "redux";
import transactions from "./transactions";
import statistics from "./statistics";
export default combineReducers({
  transactions,
  statistics
});
