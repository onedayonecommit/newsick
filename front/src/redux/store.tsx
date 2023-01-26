import { combineReducers, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { HYDRATE, createWrapper } from "next-redux-wrapper";
import { Action, AnyAction, CombinedState } from "redux";
import thunk from "redux-thunk";
import { persistReducer } from "redux-persist";
import sessionStorage from "redux-persist/es/storage/session";

export interface ReducerState {
  // slice에서 가져온 타입 넣어주기
}

// redux-persist 사용
const persistConfig = {
  key: "root",
  sessionStorage,
  whiteList: [],
};

const rootReducer = (state: ReducerState, action: AnyAction): CombinedState<ReducerState> => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };

    default:
      const combineReducer = combineReducers({});
      return combineReducer(state, action);
  }
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const makeStore = () =>
  configureStore({
    reducer: persistedReducer,
    devTools: true,
    middleware: [thunk],
  });

// ReturnType : return의 타입을 지정해 준 것
export type AppStore = ReturnType<typeof makeStore>; // store 타입
export type RootState = ReturnType<AppStore["getState"]>; // RootState 타입
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action>; // thunk를 위한 타입

export const wrapper = createWrapper<AppStore>(makeStore);
