
import axios from "axios";
import {ISingleAnime} from '../types/singleAnime';
import { IAnime, IAnimeFull, IAnimeFullResponse, IAnimeListParams, IAnimeListResponse } from "../types/jikan";

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

    static async getAnimeList(params?:IAnimeListParams): Promise<IAnime[]> {
        const response = await axios.get<IAnimeListResponse>('https://api.jikan.moe/v4/anime', {
            params
        })

        return response.data.data;
    }

    static async getAnimeById(id: number | string | undefined): Promise<IAnimeFull> {
        const response = await axios.get<IAnimeFullResponse>(`https://api.jikan.moe/v4/anime/${id}/full`)

        console.log(response.data);
        
        return response.data.data;
    }

}