import { Action } from "@remix-run/router"

export interface ISingleAnime {
    id: number,
    // reviews: IReview,
    images: IImages,
    trailer: ITrailer,
    title: string,
    title_english?: string,
    title_japanese?: string,
    episodes?: number,
    status: string,
    airing: boolean,
    aired: string,
    duration: string,
    score?: number,
    scored_by?: number,
    favorites: number,
    synopsis?: string,
    year?: number,
    type: string,
    source: number,
    rating: string,
    studios: number[],
    genres: number[],
}

export interface IReview {
    id?: number,
    score: number,
    data_added?: string,
    title?: string,
    body?: string,
    user: number,
    anime: number
}

export interface IImages {
    jpg: {
        image_url: string,
        large_image_url: string,
        small_image_url: string,
    },

    webp: {
        image_url: string,
        large_image_url: string,
        small_image_url: string,
    },

    background_image: string | null
}

export interface ITrailer {
    url: string,
    images: {
        image_url: string,
        large_image_url: string,
        small_image_url: string, 
        medium_image_url: string,
        maximum_image_url: string,
    },
    embed_url: string,
    youtube_id: string,
}

export interface IStudios {

}

export interface IGenre {
    id: number,
    name: string,
}