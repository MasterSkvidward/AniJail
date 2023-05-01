import { IAnime, IAnimeSearchParams } from "../../../types/jikan";

export interface FilterState {
    anime: IAnime[],
    params: IAnimeSearchParams,
    selectedOptionNumber: number,
}

export enum FilterActionsEnum {
    SET_ANIME = "SET_ANIME",
    SET_PARAMS = "SET_PARAMS",
    SET_SELECTED_OPTION = "SET_SELECTED_OPTION",
    SET_IS_DESCENDING = "SET_IS_DESCENDING",
    ADD_PARAMS = "ADD_PARAMS",
    CLEAR_FILTER_PARAMS = "CLEAR_FILTER_PARAMS",
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

export interface AddParamsAction{
    type: FilterActionsEnum.ADD_PARAMS;
    payload: IAnimeSearchParams;
}

export interface ClearFilterParamsAction{
    type: FilterActionsEnum.CLEAR_FILTER_PARAMS;
}


export type FilterAction = 
    SetAnimeAction | SetParamsAction | SetSelectedOptionAction | AddParamsAction | ClearFilterParamsAction

