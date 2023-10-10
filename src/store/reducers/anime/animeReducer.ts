import { AnimeAction, AnimeActionsEnum, AnimeState } from "./types";
import { IAnime, IAnimeSearchParams } from "../../../types/jikanMoe/jikan";

const initialState: AnimeState = {
  animeRecommendations: [],
  animeRecommendationsLoading: false,
  animeRecommendationsError: "",

  animeSeason: [],
  animeSeasonLoading: false,
  animeSeasonError: "",

  animeSearch: [],
  animeSearchLoading: false,
  animeSearchError: "",
};

export default function animeReducer(
  state = initialState,
  action: AnimeAction
): AnimeState {
  switch (action.type) {
    case AnimeActionsEnum.GET_ANIME_RECOMMENDATIONS:
      return { ...state, animeRecommendations: action.payload };

    case AnimeActionsEnum.SET_ANIME_RECOMMENDATIONS_LOADING:
      return { ...state, animeRecommendationsLoading: action.payload };

    case AnimeActionsEnum.SET_ANIME_RECOMMENDATIONS_ERROR:
      return { ...state, animeRecommendationsError: action.payload };

    //!

    case AnimeActionsEnum.GET_ANIME_SEASON:
      return { ...state, animeSeason: action.payload };

    case AnimeActionsEnum.SET_ANIME_SEASON_LOADING:
      return { ...state, animeSeasonLoading: action.payload };

    case AnimeActionsEnum.SET_ANIME_SEASON_ERROR:
      return { ...state, animeSeasonError: action.payload };

    //!

    case AnimeActionsEnum.GET_ANIME_SEARCH:
      return { ...state, animeSearch: action.payload };

    case AnimeActionsEnum.SET_ANIME_SEARCH_LOADING:
      return { ...state, animeSearchLoading: action.payload };

    case AnimeActionsEnum.SET_ANIME_SEARCH_ERROR:
      return { ...state, animeSearchError: action.payload };

    default:
      return state;
  }
}
