import { combineReducers } from "redux";
import user from "./user";
import calc from "./calc";

export default combineReducers({
  user,
  calc
});
