import { configureStore, combineReducers } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// slice 에서 export한 것 들!
import userSlice from "./userSlice";
import nftFundSlice from "./nftFundSlice";

// const logger = createLogger();

// redux-persist 사용
const persistConfig = {
  key: "root",
  storage,
  whiteList: ["userSlice", "nftFundSlice"],
};

const rootReducer = combineReducers({
  userInfo: userSlice.reducer,
  fundInfo: nftFundSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  // reducer: rootReducer,
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
});

export const persistor = persistStore(store);
