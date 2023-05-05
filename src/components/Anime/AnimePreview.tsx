import React, {FC} from 'react';
import { ISingleAnime } from '../../types/anime/singleAnime';
import classes from '../../styles/AnimePreview.module.scss';
import AnimeCardInfo from './AnimeCardInfo';
import { IAnime } from '../../types/jikanMoe/jikan';

interface AnimePreviewProps {
    anime: IAnime,
}

const AnimePreview:FC<AnimePreviewProps> = ({anime}) => {
    return (
       <div className={classes['preview']}>
           {/* <AnimeCardInfo anime={anime}/> */}
           <p className={classes['description__body']}>{anime?.synopsis}</p>
       </div>
    );
}

export default AnimePreview;