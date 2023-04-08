import React, {FC} from 'react';
import { IAnimeFull, IObjectInfo } from '../../types/jikan';

import classes from '../../styles/AnimeCardInfo.module.scss';
import AnimeCardInfoRow from './AnimeCardInfoRow';

interface AnimeCardInfoProps {
    anime: IAnimeFull | null
}

export type rowType = {
    name: string,
    value: string | number | IObjectInfo[] | undefined
    sortType?: string | number | undefined
    isLink: boolean
}

const AnimeCardInfo: FC<AnimeCardInfoProps> = ({anime}) => {
    const rows:rowType[] = [
        {name: 'Type', value: anime?.type, sortType: anime?.type, isLink: false},
        {name: 'Genres', value: anime?.genres, isLink: true},
        {name: 'Status', value: anime?.status, isLink: true},
        {name: 'Episodes', value: anime?.episodes, isLink: false},
        {name: 'Season', value: `${anime?.season} ${anime?.year}`, isLink: true},
    
        {name: 'Duration', value: anime?.duration, isLink: false},
    ]
   
    console.log(anime?.year);
    
    

    return (
       <div className={classes['anime-info']}>
            <div className={classes['anime-info__title']}>
                <div className={classes['anime-info__title_en']}>{anime?.title_english}</div>
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