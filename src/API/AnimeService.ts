import axios from "axios";
import {ISingleAnime} from '../types/singleAnime';
import { IAnime, IAnimeFull, IAnimeFullResponse, IAnimeSearchParams, IAnimeListResponse, IAnimeScreenshots, IAnimePicture, IAnimePicturesResponse, IAnimeScreenshotsResponse } from "../types/jikan";

export class AnimeService {

    static async getAnimeById(id: number | string | undefined): Promise<IAnimeFull> {
        const response = await axios.get<IAnimeFullResponse>(`https://api.jikan.moe/v4/anime/${id}/full`)
        return response.data.data;
    }

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
}