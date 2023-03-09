import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import localStorage from "redux-persist/es/storage";
import userReducer from "../reducers/users";
import searchReducer from "../reducers/search";
import { persistReducer, persistStore } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";
import setReducer from "../reducers/sets";
import frontPageReducer from "../reducers/frontPage";

const persistConfig = {
  key: "root",
  storage: localStorage,
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_REDUX_PERSIST_KEY,
    }),
  ],
};

const mainReducer = combineReducers({
  user: userReducer,
  search: searchReducer,
  sets: setReducer,
  frontPage: frontPageReducer,
});

const persistedReducer = persistReducer(persistConfig, mainReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
