import { IAnime, IAnimeSearchParams } from "../../../types/jikan";

export interface FilterState {
    anime: IAnime[],
    params: IAnimeSearchParams,
    selectedOptionNumber: number,
    isLoading: boolean,
    hasMoreAnime: boolean,
    error: string,
    loadNewAnime: boolean,
}

export enum FilterActionsEnum {
    SET_IS_LOADING= "SET_IS_LOADING",
    SET_ANIME = "SET_ANIME",
    SET_PARAMS = "SET_PARAMS",
    SET_HAS_MORE_ANIME = "SET_HAS_MORE_ANIME",
    SET_SELECTED_OPTION = "SET_SELECTED_OPTION",
    SET_IS_DESCENDING = "SET_IS_DESCENDING",
    ADD_PARAMS = "ADD_PARAMS",
    ADD_ANIME = "ADD_ANIME",
    CLEAR_FILTER_PARAMS = "CLEAR_FILTER_PARAMS",
}


interface SetIsLoadingAction{
    type: FilterActionsEnum.SET_IS_LOADING;
    payload: boolean;
}

interface SetAnimeAction{
    type: FilterActionsEnum.SET_ANIME;
    payload: IAnime[];
}

interface SetHasMoreAnimeAction{
    type: FilterActionsEnum.SET_HAS_MORE_ANIME;
    payload: boolean;
}

interface AddAnimeAction{
    type: FilterActionsEnum.ADD_ANIME;
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
    SetIsLoadingAction| SetAnimeAction | SetHasMoreAnimeAction | AddAnimeAction | SetParamsAction | SetSelectedOptionAction | AddParamsAction | ClearFilterParamsAction

