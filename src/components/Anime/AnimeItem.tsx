import React, {FC} from 'react';
import { useNavigate } from 'react-router-dom';

import classes from '../../styles/AnimeItem.module.scss';
import { IAnime } from '../../types/jikan';

import ImageZoom from '../../UI/ImageZoom/ImageZoom';
import { publicRoutes } from '../../utils/routes';
import { getShortenedString } from '../../utils/utils';

interface AnimeItemProps {
    anime: IAnime;
}

const AnimeItem:FC<AnimeItemProps> = ({anime}) => {
    const navigate = useNavigate();

    return (
       <div className={classes['anime']} onClick={() => navigate((`/anime/${anime.mal_id}`))}>
           <div className={classes['anime__image']}>
                <ImageZoom url={anime?.images.jpg.image_url || ''}/>
           </div>
           <h4 className={classes['anime__title']}>{getShortenedString(anime?.title_english ? anime.title_english : anime?.title, 45)}</h4>
       </div>
    );
}

export default AnimeItem;