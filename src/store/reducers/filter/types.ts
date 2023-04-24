import { IAnime, IAnimeSearchParams } from "../../../types/jikan";

export interface FilterState {
    anime: IAnime[],
    params: IAnimeSearchParams
}

export enum FilterActionsEnum {
    SORT_BY_DATE = "SORT_BY_DATE",
    SORT_BY_SCORE = "SORT_BY_SCORE",
    CHANGE_SORT_ORDER = "CHANGE_SORT_ORDER",
    SET_ANIME = "SET_ANIME",
}

export type FilterAction = 
    SortByDateAction | SortByScoreAction | ChangeSortOrderAction | SetAnimeAction


//!!!

interface SortByDateAction {
    type: FilterActionsEnum.SORT_BY_DATE;
    payload: IAnime[];
}

interface SortByScoreAction {
    type: FilterActionsEnum.SORT_BY_SCORE;
    payload: IAnime[];
}

interface ChangeSortOrderAction{
    type: FilterActionsEnum.CHANGE_SORT_ORDER;
    payload: IAnime[];
}


interface SetAnimeAction{
    type: FilterActionsEnum.SET_ANIME;
    payload: IAnime[];
}