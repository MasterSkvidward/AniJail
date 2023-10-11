import { IImages } from "../anime/anime-single";

export interface IObjectInfo {
    mal_id: number;
    type: string;
    name: string;
    url: string;
}

export interface IAnimePicture {
    
    jpg: {
        image_url: string
        large_image_url: string
        small_image_url: string
    }

    webp: {
        image_url: string
        large_image_url: string
        small_image_url: string
    }
}

export interface IAnimeRecommendation {
    entry: {
        mal_id: number
        url: string
        images: IAnimePicture
        title: string
    }
}

export interface IAnimeCharacter {
    character: {
        mal_id: number
        url: string
        images: {
            jpg : {
                image_url: string
                small_image_url: string
            }

            webp : {
                image_url: string
                small_image_url: string
            }
        }
        name: string
    }
   role: string
   voice_actors: any
}

export interface IAnimeScreenshots {
    original: string;
    preview: string;
}

interface IPagination {
    last_visible_page: number;
    has_next_page: boolean;
    items: {
        count: number;
        total: number;
        per_page: number;
    }
}

export interface IAnime {
    mal_id: number;
    url: string;
    images: {
        jpg: {
            image_url: string;
            small_image_url: string;
            large_image_url: string;
        }
        webp: {
            image_url: string;
            small_image_url: string;
            large_image_url: string;
        }
    }
    trailer: {
        youtube_id: string;
        url: string;
        embed_url: string;
    }
    approved: boolean;
    titles: {
        type: string;
        title: string;
    }[];
    title: string;
    title_english: string;
    title_japanese: string;
    title_synonyms: string[];
    type: string;
    episodes: number;
    status: string;
    source: string;
    airing: boolean;
    aired: {
        from: string;
        to: string;
        prop: {
            from: {
                day: number;
                month: number;
                year: number;
            }
            to: {
                day: number;
                month: number;
                year: number;
            }
            string: string;
        }
    }
    duration: string;
    rating: string;
    score: number;
    scored_by: number;
    rank: number;
    popularity: number;
    favorites: number;
    synopsis: string;
    background: string;
    season: string;
    year: number;
    producers: IObjectInfo[];
    licensors: IObjectInfo[];
    studios: IObjectInfo[];
    genres: IObjectInfo[];
    explicit_genres: IObjectInfo[];
    themes: IObjectInfo[];
    demographics: IObjectInfo[];
}

export interface IAnimeFull extends IAnime {
    relations: {relation: string; entry: IObjectInfo[]}
    theme: {
        openings: string[];
        endings: string[];
    }
    external: {name: string; url: string}[];
    striming: {name: string; url: string}[];
}

export interface IAnimeResponse {
    data: IAnime;
}

export interface IAnimeListResponse {
    data: IAnime[];
    pagination: IPagination;
}

export interface IAnimeFullResponse {
    data: IAnimeFull;
}

export interface IAnimeCharactersResponse {
    data: IAnimeCharacter[];
}

export interface IAnimeRecommendationsResponse {
    data: IAnimeRecommendation[];
}

export interface IAnimePicturesResponse {
    data: IAnimePicture[];
}

export interface IAnimeScreenshotsResponse {
    data: IAnimeScreenshots[];
}

export interface IFilter {
    title: string;
    value: string;
}

export interface IAnimeSearchParams {
    page?: number;
    q?: string;
    status?: string;
    rating?: string;
    order_by?: string;
    sort?: string;
    type?: any;
    limit?: number;
    sfw?: boolean;
    genres?: string,
    start_date?:string,
    end_date?: string,
    min_score?: string,
    max_score?: string,
}