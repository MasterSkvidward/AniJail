import { FilterAction, FilterActionsEnum, FilterState } from "./types";
import { IAnime, IAnimeSearchParams } from "../../../types/jikanMoe/jikan";
import { stat } from "fs";

const defaultFilterParams: IAnimeSearchParams = {
   order_by: "scored_by",
   sort: "desc",
   sfw: true,
   page: 1,
   limit: 24,
};

const initialState: FilterState = {
   anime: [],
   params: defaultFilterParams,
   selectedOptionNumber: 1,
   isLoading: false,
   hasMoreAnime: true,
   loadNewAnime: true,
   error: "",
};

export default function filterReducer(state = initialState, action: FilterAction): FilterState {
   switch (action.type) {
      case FilterActionsEnum.CLEAR_ANIME:
         return { ...state, anime: [] };

      case FilterActionsEnum.SET_IS_LOADING:
         return { ...state, isLoading: action.payload };

      case FilterActionsEnum.SET_ERROR:
         return { ...state, error: action.payload };

      case FilterActionsEnum.SET_LOAD_NEW_ANIME:
         return { ...state, loadNewAnime: action.payload };

      //   case FilterActionsEnum.INCREASE_PAGE:
      //      let currentPage = state.params.page || 1;
      //      return { ...state, params: { ...state.params, page: currentPage + 1 } };

      case FilterActionsEnum.SET_HAS_MORE_ANIME:
         return { ...state, hasMoreAnime: action.payload };
      // return {...state, hasMoreAnime: action.payload ? true : false};

      case FilterActionsEnum.SET_PARAMS:
         return { ...state, params: action.payload };

      case FilterActionsEnum.ADD_PARAMS:
         return { ...state, params: { ...state.params, ...action.payload } };

      case FilterActionsEnum.SET_ANIME:
         return { ...state, anime: action.payload };

      case FilterActionsEnum.ADD_ANIME:
         return { ...state, anime: [...state.anime, ...action.payload] };

      case FilterActionsEnum.SET_SELECTED_OPTION:
         return { ...state, selectedOptionNumber: action.payload };

      case FilterActionsEnum.CLEAR_FILTER_PARAMS:
         //   let { sort, order_by, page }: IAnimeSearchParams = state.params;
         return { ...state, params: { ...defaultFilterParams } };

      default:
         return state;
   }
}
