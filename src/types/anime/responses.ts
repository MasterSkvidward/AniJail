import { IAnimeListItem } from "./animeList";
import { ISingleAnime } from "./singleAnime";

// export interface ISingleAnimeResponse {
//     // config: any,

//     data: ISingleAnime,
//     // headers: any,
//     // request: any,
//     // status: number,
//     // statusText: string,
// }

export interface IAnimeListResponse {
    // config: any,
    count: number,
    next: string,
    previous: string,
    results: IAnimeListItem[],
    // headers: any,
    // request: any,
    // status: number,
    // statusText: string,
}


export interface IAnimeListResponseReturn {
    // config: any,
    count: number,
    next: string,
    previous: string,
    results: IAnimeListItem[],
    // headers: any,
    // request: any,
    // status: number,
    // statusText: string,
}


