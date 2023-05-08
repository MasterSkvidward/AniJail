import { IAnimeSearchParams, IObjectInfo } from "../types/jikanMoe/jikan"
import { IGenre } from "../types/anime/singleAnime";
import { IFilterOption } from "../types/types";
import {MultiValue} from "react-select";

export const formatGenres = (genres:IObjectInfo[] | undefined):string[] => {
    if (!genres) return ['-'];
    return genres.map(genre => `${genre.name}`)
}

export const getAnimeScore = (score:number | undefined):string => {
    if (!score) return '?';
    
    return String(score.toFixed(2));
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
        ? value.slice(0, maxLetters).trim() + '...'
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

export const getCurrentSeasonName = ():string => {
    const currentMonth = new Date().getMonth();
    let currentSeason = 'Winter';
    if (currentMonth < 3 || currentMonth === 11) currentSeason = 'Winter';
    else if (currentMonth < 6) currentSeason = 'Spring';
    else if (currentMonth < 9) currentSeason = 'Summer';
    else if (currentMonth < 11) currentSeason = 'Autumn';
    
    return currentSeason;
}


export async function get_average_rgb(src: string): Promise<Uint8ClampedArray> {
    return new Promise(resolve => {
        let context = document.createElement('canvas').getContext('2d');
        context!.imageSmoothingEnabled = true;
        
        let img = new Image;
        img.src = src;
        img.crossOrigin = "";
        
        img.onload = () => {
            context!.drawImage(img, 0, 0, 1, 1);
            resolve(context!.getImageData(0, 0, 1, 1).data.slice(0, 3));
        };
    });
    }
    
export const formatColor = (color:string):string => {
    // console.log(color);
    let arr = color.split(',').map(item => Number(item));
    if (arr[0] + arr[1] + arr[2] > 520) arr = [130, 30, 30];
    return arr.join(',');
}