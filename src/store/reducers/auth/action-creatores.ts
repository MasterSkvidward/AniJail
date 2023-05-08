import { IAnime, IAnimeSearchParams } from "../../../types/jikanMoe/jikan";
import { AnimeService } from "../../../API/AnimeService";
import { useFetching } from "../../../hooks/useFetching";
import { AppDispatch } from "../rootReducer";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { AuthAction, AuthActionsEnum } from "./types";


export const AuthActionCreators = {

    setAuth: (flag: boolean):AuthAction => ({type: AuthActionsEnum.SET_AUTH, payload: flag}),

    // setIsLoading: (flag: boolean):AuthAction => ({type: AuthActionsEnum.SET_IS_LOADING, payload: flag}),



    // addAnime: (params: IAnimeSearchParams, page: number):any => async (dispatch: AppDispatch) => {
    //     try {
    //         dispatch(AuthActionCreators.setIsLoading(true));
    //         const response = await AnimeService.getAnimeBySearch({...params, page: page});
    //         dispatch({type: AuthActionsEnum.SET_HAS_MORE_ANIME, payload: response.pagination.has_next_page})
    //         dispatch({type: AuthActionsEnum.ADD_ANIME, payload: response.data})
    //     } catch (e){
    //         dispatch({type: AuthActionsEnum.ADD_ANIME, payload: []});
    //     }

    //     finally {
    //         dispatch(AuthActionCreators.setIsLoading(false));
    //     }
    // },

}
