import { IAnime, IAnimeSearchParams } from "../../../types/jikanMoe/jikan";
import { AnimeService } from "../../../services/AnimeService";
import { useFetching } from "../../../hooks/useFetching";
import { AppDispatch } from "../rootReducer";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { FilterAction, FilterActionsEnum } from "./types";
import useDebounce from "../../../hooks/useDebounce";
import { useDispatch } from "react-redux";

// const debouncedSetAnime = useDebounce((params) => {
//     dispatch(FilterActionCreators.setAnime(params));
//     dispatch(FilterActionCreators.setError(""));
// }, 1000);

let errorCount = 0;
let delay = 1000;

export const FilterActionCreators = {
   clearAnime: (): FilterAction => ({ type: FilterActionsEnum.CLEAR_ANIME }),

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
            dispatch(FilterActionCreators.setIsLoading(true));
            const response = await AnimeService.getAnimeBySearch(params);
            const hasNext = response.pagination.has_next_page;
            dispatch(FilterActionCreators.setHasMoreAnime(hasNext));
            // dispatch({
            //    type: FilterActionsEnum.SET_HAS_MORE_ANIME,
            //    payload: response.pagination.has_next_page,
            // });

            dispatch({ type: FilterActionsEnum.SET_ANIME, payload: response.data });
         } catch (e: any) {
            // dispatch({ type: FilterActionsEnum.SET_ANIME, payload: [] });
            // console.log(e);

            dispatch(FilterActionCreators.setError(e.message));

            if (e.response.status === 429) {
               setTimeout(() => {
                  dispatch(FilterActionCreators.setAnime(params));
                  dispatch(FilterActionCreators.setError(""));
               }, 1000);
            }
         } finally {
            dispatch(FilterActionCreators.setIsLoading(false));
            dispatch(FilterActionCreators.setLoadNewAnime(false));
         }
      },

   addAnime:
      (params: IAnimeSearchParams): any =>
      async (dispatch: AppDispatch) => {
         try {
            console.log("fetch addAnime");
            console.log(params);
            dispatch(FilterActionCreators.setIsLoading(true));
            const response = await AnimeService.getAnimeBySearch({
               ...params,
            });

            const hasNext = response.pagination.has_next_page;
            dispatch(FilterActionCreators.setHasMoreAnime(hasNext));
            // dispatch({
            //    type: FilterActionsEnum.SET_HAS_MORE_ANIME,
            //    payload: response.pagination.has_next_page,
            // });
            dispatch({ type: FilterActionsEnum.ADD_ANIME, payload: response.data });
            errorCount = 0;
         } catch (e: any) {
            dispatch(FilterActionCreators.setError(e.message));
            if (e.response.status === 429) {
               setTimeout(() => {
                  errorCount += 1;
                  dispatch(FilterActionCreators.setIsLoading(true));
                  dispatch(FilterActionCreators.addAnime(params));
                  dispatch(FilterActionCreators.setError(""));
               }, delay * (errorCount + 1));
            }

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
         dispatch(FilterActionCreators.clearAnime());
         dispatch({ type: FilterActionsEnum.SET_PARAMS, payload: { ...params, page: 1 } });
         dispatch({ type: FilterActionsEnum.SET_LOAD_NEW_ANIME, payload: true });
      },

   addParams:
      (params: IAnimeSearchParams, loadNew = true): any =>
      (dispatch: AppDispatch) => {
         if (loadNew) {
            dispatch(FilterActionCreators.clearAnime());
            dispatch({ type: FilterActionsEnum.SET_LOAD_NEW_ANIME, payload: loadNew });
         }

         dispatch({ type: FilterActionsEnum.ADD_PARAMS, payload: params });
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
