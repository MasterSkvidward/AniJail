import { FilterAction, FilterActionsEnum, FilterState } from "./types";
import { IAnime } from "../../../types/jikan";
import { defaultFilterParams } from "../../../utils/data";
import { act } from "react-dom/test-utils";


const initialState: FilterState = {
    anime: [],
    params: defaultFilterParams,
    selectedOptionNumber: 1,
}


export default function filterReducer(state = initialState, action: FilterAction): FilterState {
    switch (action.type) {
        // case FilterActionsEnum.SORT_BY_DATE:
        //     return {...state, anime: action.payload};
        
        // case FilterActionsEnum.SORT_BY_SCORE:
        //     return {...state, anime: action.payload};

        // case FilterActionsEnum.CHANGE_SORT_ORDER:
        //     return {...state, anime: action.payload};

        case FilterActionsEnum.SET_PARAMS:
            return {...state, params: action.payload};

        case FilterActionsEnum.ADD_PARAMS:
            return {...state, params: {...state.params, ...action.payload}};

        case FilterActionsEnum.SET_ANIME:
            return {...state, anime: action.payload};

        case FilterActionsEnum.SET_SELECTED_OPTION:
            return {...state, selectedOptionNumber: action.payload};

        
        default: 
            return state;
    }
}