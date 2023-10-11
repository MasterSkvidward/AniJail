import { AnimeAction, AnimeActionsEnum, AnimeState } from "./types";
import { IAnime, IAnimeSearchParams } from "../../../types/jikanMoe/jikan";

const initialState: AnimeState = {
  animeSingle: null,
  animeSingleLoading: false,
  animeSingleError: "",

  animeRecommendations: [],
  animeRecommendationsLoading: false,
  animeRecommendationsError: "",

  animeSeason: [],
  animeSeasonLoading: false,
  animeSeasonError: "",

  animeSearch: [],
  animeSearchLoading: false,
  animeSearchError: "",

  animeCharacters: [],
  animeCharactersLoading: false,
  animeCharactersError: "",
};

export default function animeReducer(
  state = initialState,
  action: AnimeAction
): AnimeState {
  switch (action.type) {
    case AnimeActionsEnum.GET_ANIME_SINGLE:
      return { ...state, animeSingle: action.payload };

    case AnimeActionsEnum.SET_ANIME_SINGLE_LOADING:
      return { ...state, animeSingleLoading: action.payload };

    case AnimeActionsEnum.SET_ANIME_SINGLE_ERROR:
      return { ...state, animeSingleError: action.payload };

    //!

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

    //!

    case AnimeActionsEnum.GET_ANIME_CHARACTERS:
      return { ...state, animeCharacters: action.payload };

    case AnimeActionsEnum.SET_ANIME_CHARACTERS_LOADING:
      return { ...state, animeCharactersLoading: action.payload };

    case AnimeActionsEnum.SET_ANIME_CHARACTERS_ERROR:
      return { ...state, animeCharactersError: action.payload };

    default:
      return state;
  }
}
