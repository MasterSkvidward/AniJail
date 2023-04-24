import { IAnime, IAnimeSearchParams } from "../../../types/jikan";
import { AnimeService } from "../../../API/AnimeService";
import { useFetching } from "../../../hooks/useFetching";
import { AppDispatch } from "../rootReducer";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { FilterActionsEnum } from "./types";


export const FilterActionCreators = {
    
    setAnime: (params: IAnimeSearchParams):any => async (dispatch: AppDispatch) => {


        const response = await AnimeService.getAnimeBySearch(params);
        dispatch({type: FilterActionsEnum.SET_ANIME, payload: response})

        // const [fetchAnime, animeIsLoading, animesError] = useFetching( async () => {
        //     const response = await AnimeService.getAnimeBySearch(params);
        //     dispatch({type: FilterActionsEnum.SET_ANIME, payload: response})
        // })

        // fetchAnime();
    },


}
