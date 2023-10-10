import { type } from "os";
import { IAnime, IAnimeRecommendation, IAnimeSearchParams } from "../../../types/jikanMoe/jikan";

export interface AnimeState {
    animeRecommendations: IAnimeRecommendation[],
    animeRecommendationsLoading: boolean,
    animeRecommendationsError: string,
  
    animeSeason: IAnime[],
    animeSeasonLoading: boolean,
    animeSeasonError: string,

    animeSearch: IAnime[],
    animeSearchLoading: boolean,
    animeSearchError: string,
}

export enum AnimeActionsEnum {
    GET_ANIME_RECOMMENDATIONS = "GET_ANIME_RECOMMENDATIONS",
    SET_ANIME_RECOMMENDATIONS_LOADING = "SET_ANIME_RECOMMENDATIONS_LOADING",
    SET_ANIME_RECOMMENDATIONS_ERROR = "SET_ANIME_RECOMMENDATIONS_ERROR",

    GET_ANIME_SEASON = "GET_ANIME_SEASON",
    SET_ANIME_SEASON_LOADING = "SET_ANIME_SEASON_LOADING",
    SET_ANIME_SEASON_ERROR = "SET_ANIME_SEASON_ERROR",

    GET_ANIME_SEARCH = "GET_ANIME_SEARCH",
    SET_ANIME_SEARCH_LOADING = "SET_ANIME_SEARCH_LOADING",
    SET_ANIME_SEARCH_ERROR = "SET_ANIME_SEARCH_ERROR",
}

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


export type AnimeAction = 
    GetAnimeRecommendatios |
    SetAnimeRecommendationsLoading |
    SetAnimeRecommendationsError |

    GetAnimeSeason |
    SetAnimeSeasonLoading |
    SetAnimeSeasonError |

    GetAnimeSearch |
    SetAnimeSearchLoading |
    SetAnimeSearchError


