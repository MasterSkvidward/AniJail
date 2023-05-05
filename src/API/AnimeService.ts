import axios from "axios";
import { IAnimeResponse } from "../types/anime/responses";
import { IAnimeListItem } from "../types/anime/animeList";
import {ISingleAnime} from '../types/anime/singleAnime';
import { IAnime, IAnimeFull, IAnimeFullResponse, IAnimeSearchParams, IAnimeListResponse, IAnimeScreenshots, IAnimePicture, IAnimePicturesResponse, IAnimeScreenshotsResponse } from "../types/jikanMoe/jikan";

export class AnimeService {

    //! JikanMoe API

    // static async getAnimeById(id: number | string | undefined): Promise<IAnimeFull> {
    //     const response = await axios.get<IAnimeFullResponse>(`https://api.jikan.moe/v4/anime/${id}/full`)
    //     return response.data.data;
    // }

    static async getAnimePictures(id: number | string | undefined): Promise<IAnimePicture[]> {
        const response = await axios.get<IAnimePicturesResponse>(`https://api.jikan.moe/v4/anime/${id}/pictures`)
        return response.data.data;
    }

    static async getAnimeScreenshots(id: number | string | undefined): Promise<IAnimeScreenshots[]> {
        const response = await axios.get<IAnimeScreenshotsResponse>(`https://shikimori.me/api/animes/${id}/screenshots`)
        return response.data.data;
    }


    static async getAnimeBySearch(params?:IAnimeSearchParams): Promise<IAnimeListResponse> {
        const response = await axios.get<IAnimeListResponse>('https://api.jikan.moe/v4/anime', {
            params: {
                sfw: false,
                ...params
            }
        })

        return response.data;
    }


    static async getAnimeSeasonNow(): Promise<IAnime[]> {
        const response = await axios.get<IAnimeListResponse>(`https://api.jikan.moe/v4/seasons/now`);
        return response.data.data;
    }






    //! AnimeSearch API

    static async getAnimeById(id: number | string | undefined): Promise<ISingleAnime> {
        const response = await axios.get<ISingleAnime>(`http://127.0.0.1:8000/api/anime/${id}`);
        return response.data;
    }

    static async getAnimeByParams(params?:IAnimeSearchParams): Promise<IAnimeListItem> {
        const response = await axios.get<IAnimeListItem>(`http://127.0.0.1:8000/api/anime`, {
            params: {
                // sfw: false,
                ...params
            }
        })

        return response.data;
    }
}