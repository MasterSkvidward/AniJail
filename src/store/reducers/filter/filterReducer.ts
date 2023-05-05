import { FilterAction, FilterActionsEnum, FilterState } from "./types";
import { IAnime, IAnimeSearchParams } from "../../../types/jikanMoe/jikan";
import { defaultFilterParams } from "../../../utils/data";
import { act } from "react-dom/test-utils";


const initialState: FilterState = {
    anime: [],
    params: defaultFilterParams,
    selectedOptionNumber: 1,
    isLoading: false,
    hasMoreAnime: true,
    loadNewAnime: true,
    error: '',
}


export default function filterReducer(state = initialState, action: FilterAction): FilterState {
    switch (action.type) {
        case FilterActionsEnum.SET_IS_LOADING:
            return {...state, isLoading: action.payload};

        case FilterActionsEnum.SET_HAS_MORE_ANIME:
            return {...state, hasMoreAnime: action.payload};

        case FilterActionsEnum.SET_PARAMS:
            return {...state, params: action.payload};

        case FilterActionsEnum.ADD_PARAMS:
            return {...state, params: {...state.params, ...action.payload}, loadNewAnime: true};

        case FilterActionsEnum.SET_ANIME:
            return {...state, anime: action.payload, loadNewAnime: false};

        case FilterActionsEnum.ADD_ANIME:
            return {...state, anime: [...state.anime, ...action.payload]};

        case FilterActionsEnum.SET_SELECTED_OPTION:
            return {...state, selectedOptionNumber: action.payload};

        case FilterActionsEnum.CLEAR_FILTER_PARAMS:
            let {sort, order_by, page}:IAnimeSearchParams = state.params
            return {...state, params: {sort, order_by, page}, loadNewAnime: true};
        
        default: 
            return state;
    }
}