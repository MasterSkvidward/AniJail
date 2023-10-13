import {
  IAnime,
  IAnimeReviewsParams,
  IAnimeSearchParams,
} from "../../../types/jikanMoe/jikan";
import { AnimeService } from "../../../services/AnimeService";
import { useFetching } from "../../../hooks/useFetching";
import { AppDispatch } from "../rootReducer";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { AnimeAction, AnimeActionsEnum } from "./types";

export const AnimeActionCreators = {
  setAnimeSingleLoading: (flag: boolean): AnimeAction => ({
    type: AnimeActionsEnum.SET_ANIME_SEASON_LOADING,
    payload: flag,
  }),

  setAnimeSingleError: (error: string): AnimeAction => ({
    type: AnimeActionsEnum.SET_ANIME_SINGLE_ERROR,
    payload: error,
  }),

  GetAnimeSingle:
    (id: number): any =>
    async (dispatch: AppDispatch) => {
      try {
        dispatch(AnimeActionCreators.setAnimeSingleLoading(true));
        const response = await AnimeService.getAnimeById(id);
        dispatch({
          type: AnimeActionsEnum.GET_ANIME_SINGLE,
          payload: response,
        });
      } catch (e: any) {
        dispatch(AnimeActionCreators.setAnimeSingleError(e));
      } finally {
        dispatch(AnimeActionCreators.setAnimeSingleLoading(false));
      }
    },

  //!
  setAnimeRecommendationsLoading: (flag: boolean): AnimeAction => ({
    type: AnimeActionsEnum.SET_ANIME_RECOMMENDATIONS_LOADING,
    payload: flag,
  }),

  setAnimeRecommendationsError: (error: string): AnimeAction => ({
    type: AnimeActionsEnum.SET_ANIME_RECOMMENDATIONS_ERROR,
    payload: error,
  }),

  GetAnimeRecommendations:
    (id: number): any =>
    async (dispatch: AppDispatch) => {
      try {
        dispatch(AnimeActionCreators.setAnimeRecommendationsLoading(true));
        const response = await AnimeService.getAnimeRecommendatios(id);
        const slicedResponse = response.slice(0, 25);
        dispatch({
          type: AnimeActionsEnum.GET_ANIME_RECOMMENDATIONS,
          payload: slicedResponse,
        });
      } catch (e: any) {
        dispatch(AnimeActionCreators.setAnimeRecommendationsError(e));
        console.log(e);
      } finally {
        dispatch(AnimeActionCreators.setAnimeRecommendationsLoading(false));
      }
    },

  //!
  setAnimeSeasonLoading: (flag: boolean): AnimeAction => ({
    type: AnimeActionsEnum.SET_ANIME_SEASON_LOADING,
    payload: flag,
  }),

  setAnimeSeasonError: (error: string): AnimeAction => ({
    type: AnimeActionsEnum.SET_ANIME_SEASON_ERROR,
    payload: error,
  }),

  GetAnimeSeason:
    (params?: IAnimeSearchParams): any =>
    async (dispatch: AppDispatch) => {
      try {
        dispatch(AnimeActionCreators.setAnimeSeasonLoading(true));
        const response = await AnimeService.getAnimeSeasonNow(params);
        dispatch({
          type: AnimeActionsEnum.GET_ANIME_SEASON,
          payload: response,
        });
      } catch (e: any) {
        dispatch(AnimeActionCreators.setAnimeSeasonError(e));
      } finally {
        dispatch(AnimeActionCreators.setAnimeSeasonLoading(false));
      }
    },

  //!
  setAnimeSearchLoading: (flag: boolean): AnimeAction => ({
    type: AnimeActionsEnum.SET_ANIME_SEASON_LOADING,
    payload: flag,
  }),

  setAnimeSearchError: (error: string): AnimeAction => ({
    type: AnimeActionsEnum.SET_ANIME_SEASON_ERROR,
    payload: error,
  }),

  GetAnimeSearch:
    (params?: IAnimeSearchParams): any =>
    async (dispatch: AppDispatch) => {
      try {
        dispatch(AnimeActionCreators.setAnimeSearchLoading(true));
        const response = await AnimeService.getAnimeBySearch(params);
        const finalResponse = response.data;
        dispatch({
          type: AnimeActionsEnum.GET_ANIME_SEARCH,
          payload: finalResponse,
        });
      } catch (e: any) {
        dispatch(AnimeActionCreators.setAnimeSearchError(e));
      } finally {
        dispatch(AnimeActionCreators.setAnimeSearchLoading(false));
      }
    },

  //!
  setAnimeCharactersLoading: (flag: boolean): AnimeAction => ({
    type: AnimeActionsEnum.SET_ANIME_CHARACTERS_LOADING,
    payload: flag,
  }),

  setAnimeCharactersError: (error: string): AnimeAction => ({
    type: AnimeActionsEnum.SET_ANIME_CHARACTERS_ERROR,
    payload: error,
  }),

  GetAnimeCharacters:
    (id: number): any =>
    async (dispatch: AppDispatch) => {
      try {
        dispatch(AnimeActionCreators.setAnimeCharactersLoading(true));
        const response = await AnimeService.getAnimeCharacters(id);
        dispatch({
          type: AnimeActionsEnum.GET_ANIME_CHARACTERS,
          payload: response,
        });
      } catch (e: any) {
        dispatch(AnimeActionCreators.setAnimeCharactersError(e));
      } finally {
        dispatch(AnimeActionCreators.setAnimeCharactersLoading(false));
      }
    },

  //!

  setAnimeReviewsLoading: (flag: boolean): AnimeAction => ({
    type: AnimeActionsEnum.SET_ANIME_REVIEWS_LOADING,
    payload: flag,
  }),

  setAnimeReviewsError: (error: string): AnimeAction => ({
    type: AnimeActionsEnum.SET_ANIME_REVIEWS_ERROR,
    payload: error,
  }),

  GetAnimeReviews:
    (id: number, params?: IAnimeReviewsParams): any =>
    async (dispatch: AppDispatch) => {
      try {
        dispatch(AnimeActionCreators.setAnimeReviewsLoading(true));
        const response = await AnimeService.getAnimeReviews(id, params);
        dispatch({
          type: AnimeActionsEnum.GET_ANIME_REVIEWS,
          payload: response,
        });
      } catch (e: any) {
        dispatch(AnimeActionCreators.setAnimeReviewsError(e));
      } finally {
        dispatch(AnimeActionCreators.setAnimeReviewsLoading(false));
      }
    },
};
