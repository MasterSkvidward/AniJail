import { publicRoutes } from "./routes";
import { ISelectOption } from "../types/userInteface";


export const navbarLinks: {value: string, path: string}[] = [
    {value: 'Top 100', path: publicRoutes.ANIME},
    {value: 'New', path: publicRoutes.ANY},
    {value: 'Random anime', path: publicRoutes.ANY},
]

export const sortCategories: ISelectOption[] = [
    {name: 'By Date', order_by: 'start_date', sort: 'desc'},
    {name: 'By Rating', order_by: 'score',  sort: 'desc'},
    {name: 'By Name', order_by: 'title',  sort: 'asc'},
]