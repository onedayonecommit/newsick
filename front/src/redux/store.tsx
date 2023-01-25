import { combineReducers, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { HYDRATE, createWrapper } from "next-redux-wrapper";
import { ReducerState } from "react";
import { Action, AnyAction, CombinedState } from "redux";
import thunk from "redux-thunk";

const rootReducer = (state: ReducerState, action: AnyAction): CombinedState<ReducerState> => {
  if (action.type) {
    if (action.type == HYDRATE) return { ...state, ...action.payload };

    const combineReducer = combineReducers({});
    return combineReducer(state, action);
  }
};

const makeStore = () =>
  configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: [thunk],
  });

// ReturnType : return의 타입을 지정해 준 것
export type AppStore = ReturnType<typeof makeStore>; // store 타입
export type RootState = ReturnType<AppStore["getState"]>; // RootState 타입
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action>; // thunk를 위한 타입

export const wrapper = createWrapper<AppStore>(makeStore);
