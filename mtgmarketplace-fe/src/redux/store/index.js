import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducers/users";
import searchReducer from "../reducers/search";

const mainReducer = combineReducers({
  user: userReducer,
  search: searchReducer,
});

const store = configureStore({
  reducer: mainReducer,
});

export default store;
