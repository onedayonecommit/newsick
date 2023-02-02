import { configureStore, combineReducers } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// slice 에서 export한 것 들!
import userSlice from "./userSlice";

// redux-persist 사용
// const persistConfig = {
//   key: "root",
//   storage,
//   whiteList: ["userInfo"],
// };

const rootReducer = combineReducers({
  userInfo: userSlice.reducer,
});

// const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

// export const persistor = persistStore(store);
