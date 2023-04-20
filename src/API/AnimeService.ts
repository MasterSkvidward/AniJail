import axios from "axios";
import {ISingleAnime} from '../types/singleAnime';
import { IAnime, IAnimeFull, IAnimeFullResponse, IAnimeSearchParams, IAnimeListResponse, IAnimeScreenshots, IAnimePicture, IAnimePicturesResponse, IAnimeScreenshotsResponse } from "../types/jikan";

export class AnimeService {
    // static async getAnimeList(params?:IAnimeListParams): Promise<IAnime[]> {
    //     const response = await axios.get<IAnimeListResponse>('https://api.jikan.moe/v4/anime', {
    //         params
    //     })

    //     return response.data.data;
    // }

    //!
    // static async getAnimeById(id: number | string | undefined): Promise<ISingleAnime> {
    //     const response = await axios.get<ISingleAnime>(`http://127.0.0.1:8000/api/anime/${id}`);
    //     return response;
    // }

    // static async getAnimeList(params?:IAnimeListParams): Promise<IAnime[]> {
    //     const response = await axios.get<IAnimeListResponse>('https://api.jikan.moe/v4/anime', {
    //         params
    //     })

    //     return response.data.data;
    // }

    static async getAnimeById(id: number | string | undefined): Promise<IAnimeFull> {
        const response = await axios.get<IAnimeFullResponse>(`https://api.jikan.moe/v4/anime/${id}/full`)

        console.log(response.data);
        
        return response.data.data;
    }

    static async getAnimePictures(id: number | string | undefined): Promise<IAnimePicture[]> {
        const response = await axios.get<IAnimePicturesResponse>(`https://api.jikan.moe/v4/anime/${id}/pictures`)

        console.log(response.data.data);

        return response.data.data;
    }

    static async getAnimeScreenshots(id: number | string | undefined): Promise<IAnimeScreenshots[]> {
        const response = await axios.get<IAnimeScreenshotsResponse>(`https://shikimori.me/api/animes/${id}/screenshots`)

        console.log(response.data.data);

        return response.data.data;
    }


    static async getAnimeBySearch(params?:IAnimeSearchParams): Promise<IAnime[]> {
        const response = await axios.get<IAnimeListResponse>('https://api.jikan.moe/v4/anime', {
            params
        })

        return response.data.data;
    }
}