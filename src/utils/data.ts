import { publicRoutes } from "./routes"


export const navbarLinks: {value: string, path: string}[] = [
    {value: 'Top 100', path: publicRoutes.ANIME},
    {value: 'New', path: publicRoutes.ANY},
    {value: 'Random anime', path: publicRoutes.ANY},
]