import {GlobalAction, GlobalActionsEnum, GlobalState } from "./types";


const initialState: GlobalState = {
    theme: "dark",
};

export default function globalReducer(
  state = initialState,
  action: GlobalAction
): GlobalState {
  switch (action.type) {
    case GlobalActionsEnum.SET_THEME:
      return { ...state, theme: action.payload };

    default:
      return state;
  }
}
