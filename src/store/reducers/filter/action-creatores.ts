import { IAnime, IAnimeSearchParams } from "../../../types/jikan";
import { AnimeService } from "../../../API/AnimeService";
import { useFetching } from "../../../hooks/useFetching";
import { AppDispatch } from "../rootReducer";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { FilterAction, FilterActionsEnum } from "./types";


export const FilterActionCreators = {
    setAnime: (params: IAnimeSearchParams):any => async (dispatch: AppDispatch) => {

        try {
            const response = await AnimeService.getAnimeBySearch(params);
            dispatch({type: FilterActionsEnum.SET_ANIME, payload: response})
        } catch (e){
            // dispatch({type: FilterActionsEnum.SET_ANIME, payload: {}})
        }

        finally {

        }
        

        // const [fetchAnime, animeIsLoading, animesError] = useFetching( async () => {
        //     const response = await AnimeService.getAnimeBySearch(params);
        //     dispatch({type: FilterActionsEnum.SET_ANIME, payload: response})
        // })

        // fetchAnime();
    },

    setParams: (params: IAnimeSearchParams):FilterAction => ({type: FilterActionsEnum.SET_PARAMS, payload: params}),
    addParams: (params: IAnimeSearchParams):FilterAction => ({type: FilterActionsEnum.ADD_PARAMS, payload: params}),
    setSelectedOptionNumber: (number: number):FilterAction => ({type: FilterActionsEnum.SET_SELECTED_OPTION, payload: number}),
    setIsDescending: (flag: boolean):FilterAction => ({type: FilterActionsEnum.SET_IS_DESCENDING, payload: flag}),
}
