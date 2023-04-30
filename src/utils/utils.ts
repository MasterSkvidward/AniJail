import { IObjectInfo } from "../types/jikan"
import { IGenres } from "../types/singleAnime";
import { IFilterOption } from "../types/types";

export const formatGenres = (genres:IObjectInfo[] | undefined):string[] => {
    if (!genres) return ['-'];
    return genres.map(genre => `${genre.name}`)
}

export const getScoreColor = (score:number):string => {
    if (score >= 8) return 'green';
    if (score >= 7 && score < 8) return 'light-green';
    if (score >= 6 && score < 7) return 'grey';
    else return 'red';
}

export const getAnimeField = (field: string|number|undefined):string => {
    if (typeof field === 'object') return '';
    if (typeof field == 'undefined') return '';

    return String(field);
}

export const formatFilterValues = (filterTypeOptions: IFilterOption[]):string =>  {
    
    return (filterTypeOptions.map(option => option.value)).join(',');
}

export const getShortenedString = (value: string | undefined, maxLetters: number) => {
    if (!value) return '';
    return (value.length > maxLetters)
        ? value.slice(0, maxLetters) + '...'
        : value;
}

export const getCurrentYear = ():number => {
    const date = new Date;
    return date.getFullYear();
}