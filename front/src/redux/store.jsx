import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import logger from "redux-logger";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
// import { HYDRATE, createWrapper } from "next-redux-wrapper";
import storage from "redux-persist/lib/storage";
import myPageSlice from "./myPageSlice";
import fundListSlice from "./nftFundFindSlice";
import nftFundSlice from "./nftFundSlice";
import musicSlice from "./musicSlice";
import userSlice from "./userSlice";
import fundListSlice from "./nftFundFindSlice";
import marketSlice from "./nftMarketSlice";
import eventSlice from "./eventSlice";

// redux-persist 사용
const persistConfig = {
  key: "root",
  storage,
  whiteList: ["userSlice"],
};

const rootReducer = combineReducers({
  userInfo: userSlice.reducer,
  myPageInfo: myPageSlice.reducer,
  fundInfo: nftFundSlice.reducer,
  musicInfo: musicSlice.reducer,
  fundList: fundListSlice.reducer,
  marketInfo: marketSlice.reducer,
  eventView: eventSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  // reducer: rootReducer,
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // serializableCheck : false
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
});

export const persistor = persistStore(store);
