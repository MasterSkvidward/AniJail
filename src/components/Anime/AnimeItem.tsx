import React, {FC} from 'react';

import classes from '../../styles/AnimeItem.module.scss';
import { IAnime } from '../../types/jikan';

import ImageZoom from '../../UI/ImageZoom/ImageZoom';
import { getShortenedString } from '../../utils/utils';

interface AnimeItemProps {
    anime: IAnime | null;
}

const AnimeItem:FC<AnimeItemProps> = ({anime}) => {
    return (
       <div className={classes['anime']}>
           <div className={classes['anime__image']}>
                <ImageZoom url={anime?.images.jpg.image_url || ''}/>
           </div>
           <h4 className={classes['anime__title']}>{getShortenedString(anime?.title_english ? anime.title_english : anime?.title, 45)}</h4>
       </div>
    );
}

export default AnimeItem;