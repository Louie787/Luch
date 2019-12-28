import { combineReducers } from "redux";
import favoritesReducer from "./favorites";
import appReducer from "./app";

export default combineReducers({
  favoritesReducer,
  appReducer
});
