import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducers/users";
import searchReducer from "../reducers/search";
import setReducer from "../reducers/sets";
import frontPageReducer from "../reducers/frontPage";
import userCartReducer from "../reducers/cart";

const mainReducer = combineReducers({
  user: userReducer,
  search: searchReducer,
  sets: setReducer,
  frontPage: frontPageReducer,
  userCart: userCartReducer,
});

export const store = configureStore({
  reducer: mainReducer,
});
