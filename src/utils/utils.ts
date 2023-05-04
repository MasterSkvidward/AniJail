import { IAnimeSearchParams, IObjectInfo } from "../types/jikan"
import { IGenres } from "../types/singleAnime";
import { IFilterOption } from "../types/types";
import {MultiValue} from "react-select";

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

export const formatFilterValues = (filterTypeOptions: MultiValue<IFilterOption>):string =>  {
    
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

export const getFilterOptions = (options: IFilterOption[], param: string):IFilterOption[] => {
    let paramItems = param.split(',');   
    return options.filter(option => paramItems.includes(option.value));
}