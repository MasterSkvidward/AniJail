import { IObjectInfo } from "../types/jikan"

export const formatGenres = (genres:IObjectInfo[] | undefined):string[] => {
    if (!genres) return ['-'];
    return genres.map(genre => `${genre.name}`)
}

export const getScoreColor = (score:number):string => {
    if (score >= 7) return 'green';
    if (score >= 6 && score < 7) return 'grey';
    else return 'red';
}