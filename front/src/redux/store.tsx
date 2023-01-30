import { combineReducers, configureStore, ThunkAction, Reducer } from "@reduxjs/toolkit";
import { HYDRATE, createWrapper } from "next-redux-wrapper";
import { Action, AnyAction, CombinedState } from "redux";
import logger from "redux-logger";

import { persistReducer } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";
// slice 에서 export한 것 들!
import userSlice, { userState } from "./userSlice";

export interface ReducerStates {
  // slice에서 가져온 타입 넣어주기
  userInfo: userState;
}

// redux-persist 사용
// const persistConfig = {
//   key: "root",
//   storageSession,
//   whiteList: [],
// };

const rootReducer = (state: ReducerStates, action: AnyAction): CombinedState<ReducerStates> => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };

    default:
      const combineReducer = combineReducers({
        userInfo: userSlice.reducer,
      });
      return combineReducer(state, action);
  }
};

// const persistedReducer = persistReducer(persistConfig, rootReducer);

const makeStore = () =>
  configureStore({
    // reducer: persistedReducer,
    //
    reducer: rootReducer as Reducer<ReducerStates, AnyAction>,
    // devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    // middleware: [thunk],
  });

// ReturnType : return의 타입을 지정해 준 것
// type T4 = ReturnType<typeof f1>;  // { a: number, b: string }
export type AppStore = ReturnType<typeof makeStore>; // store 타입
// export type RootState = ReturnType<AppStore["getState"]>; // RootState 타입 현재 상태 트리를 반환하는 getState를 RootState에 반환
export type RootState = ReturnType<typeof rootReducer>; // 위와 동일한 RootState 타입
export type AppDispatch = AppStore["dispatch"]; // dispatch 타입
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action>; // thunk를 위한 타입

export const wrapper = createWrapper<AppStore>(makeStore);
