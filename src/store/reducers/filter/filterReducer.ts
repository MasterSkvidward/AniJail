import { FilterAction, FilterActionsEnum, FilterState } from "./types";
import { IAnime } from "../../../types/jikan";


const initialState: FilterState = {
    anime: [],
    params: {}
}


export default function filterReducer(state = initialState, action: FilterAction): FilterState {
    switch (action.type) {
        // case FilterActionsEnum.SORT_BY_DATE:
        //     return {...state, anime: action.payload};
        
        // case FilterActionsEnum.SORT_BY_SCORE:
        //     return {...state, anime: action.payload};

        // case FilterActionsEnum.CHANGE_SORT_ORDER:
        //     return {...state, anime: action.payload};

        case FilterActionsEnum.SET_ANIME:
            return {...state, anime: action.payload};

        default: 
            return state;
    }
}