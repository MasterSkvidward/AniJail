// import { IAnime, IAnimeSearchParams } from "../../../types/jikanMoe/jikan";
import { IAnimeSearchParams } from "../../../types/anime/animeList";
import { IAnimeListItem } from "../../../types/anime/animeList";
import { AnimeService } from "../../../API/AnimeService";
import { useFetching } from "../../../hooks/useFetching";
import { AppDispatch } from "../rootReducer";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { FilterAction, FilterActionsEnum } from "./types";


export const FilterActionCreators = {
    setIsLoading: (flag: boolean):FilterAction => ({type: FilterActionsEnum.SET_IS_LOADING, payload: flag}),

    setAnime: (params: IAnimeSearchParams):any => async (dispatch: AppDispatch) => {
        try {
            dispatch(FilterActionCreators.setIsLoading(true));
            const response = await AnimeService.getAnimeByParams(params);
            dispatch({type: FilterActionsEnum.SET_HAS_MORE_ANIME, payload: response.next})
            dispatch({type: FilterActionsEnum.SET_ANIME, payload: response.results})
        } catch (e){
            dispatch({type: FilterActionsEnum.SET_ANIME, payload: []})
        }

        finally {
            dispatch(FilterActionCreators.setIsLoading(false));
        }
    },

    // addAnime: (params: IAnimeSearchParams, page: number):any => async (dispatch: AppDispatch) => {
    //     try {
    //         dispatch(FilterActionCreators.setIsLoading(true));
    //         const response = await AnimeService.getAnimeByParams({...params, page: page});
    //         dispatch({type: FilterActionsEnum.SET_HAS_MORE_ANIME, payload: response.pagination.has_next_page})
    //         dispatch({type: FilterActionsEnum.ADD_ANIME, payload: response.data})
    //     } catch (e){
    //         dispatch({type: FilterActionsEnum.ADD_ANIME, payload: []});
    //     }

    //     finally {
    //         dispatch(FilterActionCreators.setIsLoading(false));
    //     }
    // },

    // setHasMoreAnime: (flag: boolean): FilterAction => ({type: FilterActionsEnum.SET_HAS_MORE_ANIME, payload: flag}),
    setParams: (params: IAnimeSearchParams):FilterAction => ({type: FilterActionsEnum.SET_PARAMS, payload: params}),
    addParams: (params: IAnimeSearchParams):FilterAction => ({type: FilterActionsEnum.ADD_PARAMS, payload: params}),
    setSelectedOptionNumber: (number: number):FilterAction => ({type: FilterActionsEnum.SET_SELECTED_OPTION, payload: number}),
    clearFilterParams: ():FilterAction => ({type: FilterActionsEnum.CLEAR_FILTER_PARAMS}),
}
