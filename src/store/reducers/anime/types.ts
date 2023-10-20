import {
   IAnime,
   IAnimeCharacter,
   IAnimeRecommendation,
   IAnimeSearchParams,
   IAnimeFull,
   IAnimeReview,
} from "../../../types/jikanMoe/jikan";

export interface AnimeState {
   animeSingle: IAnime | null;
   animeSingleLoading: boolean;
   animeSingleError: string;

   animeRecommendations: IAnimeRecommendation[];
   animeRecommendationsLoading: boolean;
   animeRecommendationsError: string;

   animeSeason: IAnime[];
   animeSeasonLoading: boolean;
   animeSeasonError: string;

   animeSearch: IAnime[];
   animeSearchLoading: boolean;
   animeSearchError: string;

   animeCharacters: IAnimeCharacter[];
   animeCharactersLoading: boolean;
   animeCharactersError: string;

   animeReviews: IAnimeReview[];
   animeReviewsLoading: boolean;
   animeReviewsError: string;
}

export enum AnimeActionsEnum {
   GET_ANIME_SINGLE = "GET_ANIME_SINGLE",
   SET_ANIME_SINGLE_LOADING = "SET_ANIME_SINGLE_LOADING",
   SET_ANIME_SINGLE_ERROR = "SET_ANIME_SINGLE_ERROR",

   CLEAR_ANIME_SINGLE = "CLEAR_ANIME_SINGLE",

   GET_ANIME_RECOMMENDATIONS = "GET_ANIME_RECOMMENDATIONS",
   SET_ANIME_RECOMMENDATIONS_LOADING = "SET_ANIME_RECOMMENDATIONS_LOADING",
   SET_ANIME_RECOMMENDATIONS_ERROR = "SET_ANIME_RECOMMENDATIONS_ERROR",

   GET_ANIME_SEASON = "GET_ANIME_SEASON",
   SET_ANIME_SEASON_LOADING = "SET_ANIME_SEASON_LOADING",
   SET_ANIME_SEASON_ERROR = "SET_ANIME_SEASON_ERROR",

   GET_ANIME_SEARCH = "GET_ANIME_SEARCH",
   SET_ANIME_SEARCH_LOADING = "SET_ANIME_SEARCH_LOADING",
   SET_ANIME_SEARCH_ERROR = "SET_ANIME_SEARCH_ERROR",

   GET_ANIME_CHARACTERS = "GET_ANIME_CHARACTERS",
   SET_ANIME_CHARACTERS_LOADING = "SET_ANIME_CHARACTERS_LOADING",
   SET_ANIME_CHARACTERS_ERROR = "SET_ANIME_CHARACTERS_ERROR",

   GET_ANIME_REVIEWS = "GET_ANIME_REVIEWS",
   SET_ANIME_REVIEWS_LOADING = "SET_ANIME_REVIEWS_LOADING",
   SET_ANIME_REVIEWS_ERROR = "SET_ANIME_REVIEWS_ERROR",
}

interface GetAnimeSingle {
   type: AnimeActionsEnum.GET_ANIME_SINGLE;
   payload: IAnime;
}

interface ClearAnimeSingle {
   type: AnimeActionsEnum.CLEAR_ANIME_SINGLE;
}

interface SetAnimeSingleLoading {
   type: AnimeActionsEnum.SET_ANIME_SINGLE_LOADING;
   payload: boolean;
}

interface SetAnimeSingleError {
   type: AnimeActionsEnum.SET_ANIME_SINGLE_ERROR;
   payload: string;
}

//!

interface GetAnimeRecommendatios {
   type: AnimeActionsEnum.GET_ANIME_RECOMMENDATIONS;
   payload: IAnimeRecommendation[];
}

interface SetAnimeRecommendationsLoading {
   type: AnimeActionsEnum.SET_ANIME_RECOMMENDATIONS_LOADING;
   payload: boolean;
}

interface SetAnimeRecommendationsError {
   type: AnimeActionsEnum.SET_ANIME_RECOMMENDATIONS_ERROR;
   payload: string;
}

//!
interface GetAnimeSeason {
   type: AnimeActionsEnum.GET_ANIME_SEASON;
   payload: IAnime[];
}

interface SetAnimeSeasonLoading {
   type: AnimeActionsEnum.SET_ANIME_SEASON_LOADING;
   payload: boolean;
}

interface SetAnimeSeasonError {
   type: AnimeActionsEnum.SET_ANIME_SEASON_ERROR;
   payload: string;
}

//!
interface GetAnimeSearch {
   type: AnimeActionsEnum.GET_ANIME_SEARCH;
   payload: IAnime[];
}

interface SetAnimeSearchLoading {
   type: AnimeActionsEnum.SET_ANIME_SEARCH_LOADING;
   payload: boolean;
}

interface SetAnimeSearchError {
   type: AnimeActionsEnum.SET_ANIME_SEARCH_ERROR;
   payload: string;
}

//!

interface GetAnimeCharacters {
   type: AnimeActionsEnum.GET_ANIME_CHARACTERS;
   payload: IAnimeCharacter[];
}

interface SetAnimeCharactersLoading {
   type: AnimeActionsEnum.SET_ANIME_CHARACTERS_LOADING;
   payload: boolean;
}

interface SetAnimeCharactersError {
   type: AnimeActionsEnum.SET_ANIME_CHARACTERS_ERROR;
   payload: string;
}

//!

interface GetAnimeReviews {
   type: AnimeActionsEnum.GET_ANIME_REVIEWS;
   payload: IAnimeReview[];
}

interface SetAnimeReviewsLoading {
   type: AnimeActionsEnum.SET_ANIME_REVIEWS_LOADING;
   payload: boolean;
}

interface SetAnimeReviewsError {
   type: AnimeActionsEnum.SET_ANIME_REVIEWS_ERROR;
   payload: string;
}

export type AnimeAction =
   | GetAnimeSingle
   | ClearAnimeSingle
   | SetAnimeSingleLoading
   | SetAnimeSingleError
   | GetAnimeRecommendatios
   | SetAnimeRecommendationsLoading
   | SetAnimeRecommendationsError
   | GetAnimeSeason
   | SetAnimeSeasonLoading
   | SetAnimeSeasonError
   | GetAnimeSearch
   | SetAnimeSearchLoading
   | SetAnimeSearchError
   | GetAnimeCharacters
   | SetAnimeCharactersLoading
   | SetAnimeCharactersError
   | GetAnimeReviews
   | SetAnimeReviewsLoading
   | SetAnimeReviewsError;
