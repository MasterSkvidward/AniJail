export type ThemeType = "dark" | "light"

export interface GlobalState {
    theme: ThemeType,
}

export enum GlobalActionsEnum {
    SET_THEME = "SET_THEME",
}

export interface SetThemeAction{
    type: GlobalActionsEnum.SET_THEME;
    payload: ThemeType;
}

export type GlobalAction = 
    SetThemeAction

