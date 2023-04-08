import { IObjectInfo } from "../types/jikan"

export const formatGenres = (genres:IObjectInfo[] | undefined):string[] => {
    if (!genres) return ['-'];
    return genres.map(genre => `${genre.name}`)
}