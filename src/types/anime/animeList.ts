import { IGenre, IImages, ITrailer } from "./singleAnime"

// export interface IAnimeList {
//     data: IAnimeListItem[]
// }

export interface IAnimeListItem {
    id: number,
    score: number,
    scored_by: number,
    user_score: number,
    type: string,
    source: string,
    rating: string,

    genres: IGenre[],
    studios: [],
    images: IImages,
    trailer: ITrailer,

    title: string,
    title_english: string,
    title_japanese: string,
    episodes: number,
    status: string,
    airing: boolean,
    aired?: {},

    duration: string,
    favorites: number,
    synopsis: string,
    season: string,
    year: number,
    characters: number[],
}   

export interface IAnimeSearchParams {
    year?: number,
    year__gt?: number,
    year__lt?: number,
    title?: string,
    order_by?: string,
    type?: string,
    rating?: string,
    source?: string,
    genres?: string,
    studios?: string,
    status?: string,
    season?: string,
    score?: number,
    scored_by?: number,
    limit?: number,
    offset?: number,
}