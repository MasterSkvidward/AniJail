import { IAnime, IAnimeSearchParams } from "../../../types/jikanMoe/jikan";
import { AnimeService } from "../../../services/AnimeService";
import { useFetching } from "../../../hooks/useFetching";
import { AppDispatch } from "../rootReducer";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { FilterAction, FilterActionsEnum } from "./types";

export const FilterActionCreators = {
   setIsLoading: (flag: boolean): FilterAction => ({
      type: FilterActionsEnum.SET_IS_LOADING,
      payload: flag,
   }),

   setError: (error: string): FilterAction => ({
      type: FilterActionsEnum.SET_ERROR,
      payload: error,
   }),

   setLoadNewAnime: (flag: boolean): FilterAction => ({
      type: FilterActionsEnum.SET_LOAD_NEW_ANIME,
      payload: flag,
   }),

   setAnime:
      (params: IAnimeSearchParams): any =>
      async (dispatch: AppDispatch) => {
         try {
            console.log("fetch setAnime");
            // console.log(params);
            
            dispatch(FilterActionCreators.setIsLoading(true));
            const response = await AnimeService.getAnimeBySearch(params);
            dispatch({
               type: FilterActionsEnum.SET_HAS_MORE_ANIME,
               payload: response.pagination.has_next_page,
            });
            console.log(response.data);
            
            
            dispatch({ type: FilterActionsEnum.SET_ANIME, payload: response.data });
         } catch (e: any) {
            // dispatch({ type: FilterActionsEnum.SET_ANIME, payload: [] });
            // console.log(e);

            dispatch(FilterActionCreators.setError(e.message));
         } finally {
            dispatch(FilterActionCreators.setIsLoading(false));
            dispatch(FilterActionCreators.setLoadNewAnime(false));
         }
      },

   addAnime:
      (params: IAnimeSearchParams, page: number): any =>
      async (dispatch: AppDispatch) => {
         try {
            console.log("fetch addAnime");
            dispatch(FilterActionCreators.setIsLoading(true));
            const response = await AnimeService.getAnimeBySearch({
               ...params,
               page: page,
            });
            dispatch({
               type: FilterActionsEnum.SET_HAS_MORE_ANIME,
               payload: response.pagination.has_next_page,
            });
            dispatch({ type: FilterActionsEnum.ADD_ANIME, payload: response.data });
         } catch (e: any) {
            dispatch(FilterActionCreators.setError(e.message));

            // dispatch({ type: FilterActionsEnum.ADD_ANIME, payload: [] });
         } finally {
            dispatch(FilterActionCreators.setIsLoading(false));
         }
      },

   setHasMoreAnime: (flag: boolean): FilterAction => ({
      type: FilterActionsEnum.SET_HAS_MORE_ANIME,
      payload: flag,
   }),

   setParams:
      (params: IAnimeSearchParams): any =>
      (dispatch: AppDispatch) => {
         dispatch({ type: FilterActionsEnum.SET_PARAMS, payload: params });
      },

   addParams:
      (params: IAnimeSearchParams): any =>
      (dispatch: AppDispatch) => {
         dispatch({ type: FilterActionsEnum.ADD_PARAMS, payload: params });
         dispatch({ type: FilterActionsEnum.SET_LOAD_NEW_ANIME, payload: true });
      },

   setSelectedOptionNumber: (number: number): FilterAction => ({
      type: FilterActionsEnum.SET_SELECTED_OPTION,
      payload: number,
   }),

   clearFilterParams: (): any => (dispatch: AppDispatch) => {
      dispatch({ type: FilterActionsEnum.SET_ANIME, payload: [] });
      dispatch({ type: FilterActionsEnum.CLEAR_FILTER_PARAMS });
      dispatch({ type: FilterActionsEnum.SET_LOAD_NEW_ANIME, payload: true });
   },
};
