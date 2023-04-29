import { IAnime, IAnimeSearchParams } from "../../../types/jikan";

export interface FilterState {
    anime: IAnime[],
    params: IAnimeSearchParams,
    selectedOptionNumber: number,
    isDescending: boolean,
}

export enum FilterActionsEnum {
    SET_ANIME = "SET_ANIME",
    SET_PARAMS = "SET_PARAMS",
    SET_SELECTED_OPTION = "SET_SELECTED_OPTION",
    SET_IS_DESCENDING = "SET_IS_DESCENDING",
    ADD_PARAMS = "ADD_PARAMS",
}


interface SetAnimeAction{
    type: FilterActionsEnum.SET_ANIME;
    payload: IAnime[];
}

interface SetParamsAction{
    type: FilterActionsEnum.SET_PARAMS;
    payload: IAnimeSearchParams;
}

interface SetSelectedOptionAction{
    type: FilterActionsEnum.SET_SELECTED_OPTION;
    payload: number;
}

interface SetIsDescendingAction{
    type: FilterActionsEnum.SET_IS_DESCENDING;
    payload: boolean;
}

interface AddParamsAction{
    type: FilterActionsEnum.ADD_PARAMS;
    payload: IAnimeSearchParams;
}


export type FilterAction = 
    SetAnimeAction | SetParamsAction | SetSelectedOptionAction | SetIsDescendingAction | AddParamsAction

