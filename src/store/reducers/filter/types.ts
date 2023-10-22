import { IAnime, IAnimeSearchParams } from "../../../types/jikanMoe/jikan";

export interface FilterState {
   anime: IAnime[] | [];
   params: IAnimeSearchParams;
   selectedOptionNumber: number;
   isLoading: boolean;
   hasMoreAnime: boolean;
   error: string;
   loadNewAnime: boolean;
}

export enum FilterActionsEnum {
   CLEAR_ANIME = "CLEAR_ANIME",

   SET_IS_LOADING = "SET_IS_LOADING",
   SET_ERROR = "SET_ERROR",
   SET_LOAD_NEW_ANIME = "SET_LOAD_NEW_ANIME",
   //    INCREASE_PAGE = "INCREASE_PAGE",
   SET_ANIME = "SET_ANIME",
   DELETE_ANIME = "DELETE_ANIME",
   SET_PARAMS = "SET_PARAMS",
   SET_HAS_MORE_ANIME = "SET_HAS_MORE_ANIME",
   SET_SELECTED_OPTION = "SET_SELECTED_OPTION",
   SET_IS_DESCENDING = "SET_IS_DESCENDING",
   ADD_PARAMS = "ADD_PARAMS",
   ADD_ANIME = "ADD_ANIME",
   CLEAR_FILTER_PARAMS = "CLEAR_FILTER_PARAMS",
}

interface ClearAnimeAction {
    type: FilterActionsEnum.CLEAR_ANIME;
 }

interface SetIsLoadingAction {
   type: FilterActionsEnum.SET_IS_LOADING;
   payload: boolean;
}

interface SetErrorAction {
   type: FilterActionsEnum.SET_ERROR;
   payload: string;
}

interface SetLoadNewAnimeAction {
   type: FilterActionsEnum.SET_LOAD_NEW_ANIME;
   payload: boolean;
}

// interface IncreasePageAction {
//    type: FilterActionsEnum.INCREASE_PAGE;
// }

interface SetAnimeAction {
   type: FilterActionsEnum.SET_ANIME;
   payload: IAnime[];
}

interface DeleteAnimeAction {
   type: FilterActionsEnum.DELETE_ANIME;
}

interface SetHasMoreAnimeAction {
   type: FilterActionsEnum.SET_HAS_MORE_ANIME;
   payload: boolean;
}

interface AddAnimeAction {
   type: FilterActionsEnum.ADD_ANIME;
   payload: IAnime[];
}

interface SetParamsAction {
   type: FilterActionsEnum.SET_PARAMS;
   payload: IAnimeSearchParams;
}

interface SetSelectedOptionAction {
   type: FilterActionsEnum.SET_SELECTED_OPTION;
   payload: number;
}

export interface AddParamsAction {
   type: FilterActionsEnum.ADD_PARAMS;
   payload: IAnimeSearchParams;
}

export interface ClearFilterParamsAction {
   type: FilterActionsEnum.CLEAR_FILTER_PARAMS;
}

export type FilterAction =
| ClearAnimeAction
   | SetIsLoadingAction
   | SetErrorAction
   | SetLoadNewAnimeAction
   //    | IncreasePageAction
   | SetAnimeAction
   | DeleteAnimeAction
   | SetHasMoreAnimeAction
   | AddAnimeAction
   | SetParamsAction
   | SetSelectedOptionAction
   | AddParamsAction
   | ClearFilterParamsAction;
