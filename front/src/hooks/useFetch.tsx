import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";

// useDispatch 사용할 때
export const useAppDispatch: () => AppDispatch = useDispatch;

// useSelector 사용할 때 state 뒤에 붙여야하는 state의 타입과 반환 값의 타입을 입력해주지 않아도 되게 해준다!
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
