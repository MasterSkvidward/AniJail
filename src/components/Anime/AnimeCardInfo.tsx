import React, {FC} from 'react';
import { IAnimeFull, IObjectInfo } from '../../types/jikanMoe/jikan';

import classes from '../../styles/AnimeCardInfo.module.scss';
import AnimeCardInfoRow from './AnimeCardInfoRow';
import { AiFillMobile } from 'react-icons/ai';
import { getAnimeField } from '../../utils/utils';
import { ISingleAnime } from '../../types/anime/singleAnime';
import { IAnime } from '../../types/jikanMoe/jikan';


interface AnimeCardInfoProps {
    anime: ISingleAnime | null
}

export type rowType = {
    name: string,
    value: string | IObjectInfo[] | []
    sortType?: string | number | undefined
    isLink: boolean
}

const AnimeCardInfo: FC<AnimeCardInfoProps> = ({anime}) => {
    const rows:rowType[] = [
        {name: 'Type', value: getAnimeField(anime?.type), sortType: anime?.type, isLink: false},
        // {name: 'Genres', value: anime?.genres || [], isLink: true},
        {name: 'Status', value: getAnimeField(anime?.status), isLink: true},
        {name: 'Episodes', value: getAnimeField(anime?.episodes), isLink: false},
        // {name: 'Season', value: `${getAnimeField(anime?.season)} ${getAnimeField(anime?.year)}`, isLink: true},
        {name: 'Season', value: `${getAnimeField(anime?.year)}`, isLink: true},
        {name: 'Duration', value: getAnimeField(anime?.duration), isLink: false},
        {name: 'Duration', value: getAnimeField(anime?.duration), isLink: false},
    ]

    
    return (
       <div className={classes['anime-info']}>
            <div className={classes['anime-info__title']}>
                <div className={classes['anime-info__title_en']}>{anime?.title_english ? anime.title_english : anime?.title}</div>
                <div className={classes['anime-info__title_jp']}>{anime?.title_japanese}</div>
           </div>

            <div className={classes['anime-info__rows']}>
                {rows.map((row, index) =>
                    <AnimeCardInfoRow name={row.name} value={row.value} sortType={row.sortType} isLink={row.isLink} key={index}/>
                )}
            </div>
           
       </div>
    );
}

export default AnimeCardInfo;