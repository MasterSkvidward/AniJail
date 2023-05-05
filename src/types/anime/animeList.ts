import { IGenre, IImages } from "./singleAnime"

// export interface IAnimeList {
//     data: IAnimeListItem[]
// }

export interface IAnimeListItem {
    id: number,
    title: string,
    title_english: string,
    score: number | null,
    user_score: number | null,
    year: number,
    type: {
        name: string,
    },
    images: IImages,
    genres: IGenre[],
}   