import {
  IAnime,
  IAnimeResponse,
  IAnimeFull,
  IAnimeFullResponse,
  IAnimeSearchParams,
  IAnimeListResponse,
  IAnimeScreenshots,
  IAnimePicture,
  IAnimePicturesResponse,
  IAnimeScreenshotsResponse,
  IAnimeRecommendation,
  IAnimeRecommendationsResponse,
  IAnimeCharacter,
  IAnimeCharactersResponse,
  IAnimeReviewsResponse,
  IAnimeReview,
  IAnimeReviewsParams,
} from "../types/jikanMoe/jikan";

import $api from "../API/api";
import { API_ENDPOINTS } from "../API/api-endpoints";

export class AnimeService {
  //! JikanMoe API

  static async getAnimeById(id: number | string | undefined): Promise<IAnime> {
    const response = await $api.get<IAnimeResponse>(
      `${API_ENDPOINTS.ANIME}/${id}`
    );

    return response.data.data;
  }

  static async getAnimeCharacters(
    id: number | string | undefined
  ): Promise<IAnimeCharacter[]> {
    const response = await $api.get<IAnimeCharactersResponse>(
      `${API_ENDPOINTS.ANIME}/${id}/characters`,
      {
        params: {
          limit: 10,
        },
      }
    );
    return response.data.data;
  }

  static async getAnimeReviews(
    id: number | string | undefined,
    params?: IAnimeReviewsParams
  ): Promise<IAnimeReview[]> {
    const response = await $api.get<IAnimeReviewsResponse>(
      `${API_ENDPOINTS.ANIME}/${id}/reviews`,
      { params }
    );
    return response.data.data;
  }

  static async getAnimePictures(
    id: number | string | undefined
  ): Promise<IAnimePicture[]> {
    const response = await $api.get<IAnimePicturesResponse>(
      `${API_ENDPOINTS.ANIME}/${id}/pictures`
    );
    return response.data.data;
  }

  static async getAnimeRecommendatios(
    id: number | undefined
  ): Promise<IAnimeRecommendation[]> {
    const response = await $api.get<IAnimeRecommendationsResponse>(
      `${API_ENDPOINTS.ANIME}/${id}/recommendations`,
      {
        params: {
          limit: 15,
        },
      }
    );

    return response.data.data;
  }

  static async getAnimeBySearch(
    params?: IAnimeSearchParams
  ): Promise<IAnimeListResponse> {
    const response = await $api.get<IAnimeListResponse>(API_ENDPOINTS.ANIME, {
      params: {
        sfw: false,
        ...params,
      },
    });

    return response.data;
  }

  static async getAnimeSeasonNow(
    params: IAnimeSearchParams = {}
  ): Promise<IAnime[]> {
    //! убрать try, catch; перенести запрос из компонента в redux, там обернуть в try, catch
    const response = await $api.get<IAnimeListResponse>(
      API_ENDPOINTS.SEASON_NOW,
      { params }
    );

    return response.data.data;
  }

  //   static async getAnimeScreenshots(
  //     id: number | string | undefined
  //   ): Promise<IAnimeScreenshots[]> {
  //     const response = await axios.get<IAnimeScreenshotsResponse>(
  //       `https://shikimori.me/api/animes/${id}/screenshots`
  //     );
  //     return response.data.data;
  //   }

  //! AnimeSearch API

  // static async getAnimeById(id: number | string | undefined): Promise<ISingleAnime> {
  //     const response = await axios.get<ISingleAnime>(`http://127.0.0.1:8000/api/anime/${id}`);
  //     return response.data;
  // }

  //   static async getAnimeByParams(
  //     params?: IAnimeSearchParams
  //   ): Promise<IAnimeListItem> {
  //     const response = await axios.get<IAnimeListItem>(
  //       `http://127.0.0.1:8000/api/anime`,
  //       {
  //         params: {
  //           // sfw: false,
  //           ...params,
  //         },
  //       }
  //     );

  //     return response.data;
  //   }
}
