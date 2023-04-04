export interface ISingleAnime {
    id: number,
    reviews: IReview,
    images: IImages,
    trailer: ITrailer,
    title: string,
    title_english?: string,
    title_japanese?: string,
    type: string,
    source: string,
    episodes?: number,
    status: string,
    airing: boolean,
    aired: string,
    duration: string,
    rating: string,
    score?: number,
    scored_by?: number,
    favorites: number,
    synopsis?: string,
    year?: number,
    studios: IStudios,
    genres: IGenres,
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

}

export interface ITrailer {

}

export interface IStudios {

}

export interface IGenres {

}