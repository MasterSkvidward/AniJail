import React, {FC} from 'react';
import { useNavigate } from 'react-router-dom';

import classes from '../../styles/AnimeItem.module.scss';
import { ISingleAnime } from '../../types/anime/singleAnime';
import { IAnime } from '../../types/jikanMoe/jikan';
import Image from '../../UI/Image/Image';
import ImageZoom from '../../UI/ImageZoom/ImageZoom';
import { publicRoutes } from '../../utils/routes';
import { getShortenedString } from '../../utils/utils';
import AnimePreview from './AnimePreview';

interface AnimeItemProps {
    anime: IAnime | null;
    maxWidth?: number,
    maxHeight?: number,
    minWidth?: number,
    width?: number,
    height?: number,
}

const AnimeItem:FC<AnimeItemProps> = ({anime, width, height, maxHeight=340, maxWidth=215, minWidth=158}) => {
    const navigate = useNavigate();

    const propsStyles = {
        width: `${width}px`,
        maxWidth: `${maxWidth}px`,
        minWidth: `${minWidth}px`,
        height: `${height}px`,
    }

    if (!anime) return (<></>);

    return (
        <div style={propsStyles} className={classes['anime']} onClick={() => navigate((`/anime/${anime?.mal_id}`))}>
            <div className={classes['anime__image']}>
                <Image url={anime?.images.jpg.image_url || ''}/>
            </div>
            <h4 className={classes['anime__title']}>{getShortenedString(anime?.title_english ? anime.title_english : anime?.title, 37)}</h4>
            {/* <AnimePreview anime={anime}/> */}
        </div>
    );
}

export default AnimeItem;