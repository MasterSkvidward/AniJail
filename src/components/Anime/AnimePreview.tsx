import React, {FC} from 'react';
import { ISingleAnime } from '../../types/anime/singleAnime';
import classes from '../../styles/AnimePreview.module.scss';
import AnimeCardInfo from './AnimeCardInfo';
import { getShortenedString } from '../../utils/utils';
import Loader from '../../UI/Loader/Loader';

interface AnimePreviewProps {
    anime: ISingleAnime,
}

const AnimePreview:FC<AnimePreviewProps> = ({anime}) => {

    return (
       <div className={classes['preview']} onClick={(e) => e.stopPropagation()}>

            {!anime
                ? 
                    <Loader/>  
                :
                    <>
                        <AnimeCardInfo anime={anime}/>
                        <p className={classes['preview__synopsis']}>{getShortenedString(anime?.synopsis, 335)}</p>
                    </> 
            }
          
       </div>
    );
}

export default AnimePreview;