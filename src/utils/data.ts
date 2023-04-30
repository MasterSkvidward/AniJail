import { publicRoutes } from "./routes";
import { ISelectOption } from "../types/userInteface";
import { IAnimeSearchParams } from "../types/jikan";


export const navbarLinks: {value: string, path: string}[] = [
    {value: 'Top 100', path: publicRoutes.ANIME},
    {value: 'New', path: publicRoutes.ANY},
    {value: 'Random anime', path: publicRoutes.ANY},
]

export const sortCategories: ISelectOption[] = [
    {name: 'By Date', order_by: 'start_date', sort: 'desc'},
    {name: 'By Popularity', order_by: 'scored_by', sort: 'desc'},
    {name: 'By Rating', order_by: 'score',  sort: 'desc'},
    {name: 'By Name', order_by: 'title',  sort: 'asc'},
]

export const defaultFilterParams: IAnimeSearchParams = {
    order_by: 'scored_by',
    sort: 'desc',
    start_date: '',
    end_date: '',
}

export const filterTypeOptions = [
    {value: 'tv', label: 'TV'},
    {value: 'movie', label: 'Movie'},
    {value: 'ova', label: 'OVA'},
    {value: 'special', label: 'Special'},
    {value: 'ona', label: 'ONA'},
    {value: 'music', label: 'Music'},
]

export const filterGenreOptions = [
    {value: '1', label: 'Action'},
    {value: 'movie', label: 'Movie'},
    {value: 'ova', label: 'OVA'},
    {value: 'special', label: 'Special'},
    {value: 'ona', label: 'ONA'},
    {value: 'music', label: 'Music'},
]

export const filterAgeOptions = [
    {value: 'g', label: 'G - All Ages'},
    {value: 'pg', label: 'PG'},
    {value: 'pg13', label: 'PG-13'},
    {value: 'r17', label: 'R'},
    {value: 'r', label: 'R+'},
]