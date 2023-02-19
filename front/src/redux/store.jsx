import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import logger from "redux-logger";
import storage from "redux-persist/lib/storage";
import myPageSlice from "./myPageSlice";
import nftFundSlice from "./nftFundSlice";
import marketSlice from "./nftMarketSlice";
// slice 에서 export한 것 들!
import userSlice from "./userSlice";
// const logger = createLogger();

// redux-persist 사용
const persistConfig = {
  key: "root",
  storage,
  whiteList: ["userSlice"],
};

const rootReducer = combineReducers({
  userInfo: userSlice.reducer,
  myPageInfo: myPageSlice.reducer,
  fundInfo: nftFundSlice.reducer, // 이거 없었어
  marketInfo: marketSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  // reducer: rootReducer,
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // serializableCheck : false
      serializableCheck: { ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER] },
    }).concat(logger),
});

export const persistor = persistStore(store);
