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
}

const AnimeCardInfo: FC<AnimeCardInfoProps> = ({anime}) => {
    const rows:rowType[] = [
        {name: 'Year', value: anime?.year, sortType: anime?.year},
        {name: 'Genres', value: anime?.genres},
        {name: 'Year', value: anime?.year},
        {name: 'Year', value: anime?.year},
        {name: 'Year', value: anime?.year},
    ]

    return (
       <div className={classes['anime-info']}>
            <div className={classes['anime-info__title']}>
                <div className={classes['anime-info__title_en']}>{anime?.title_english}</div>
                <div className={classes['anime-info__title_jp']}>{anime?.title_japanese}</div>
           </div>

            <div className={classes['anime-info__rows']}>
                {rows.map((row, index) =>
                    <AnimeCardInfoRow name={row.name} value={row.value} key={index}/>
                )}
            </div>
           
       </div>
    );
}

export default AnimeCardInfo;