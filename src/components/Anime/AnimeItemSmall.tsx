import React, {FC} from 'react';
import { IAnime } from '../../types/jikan';
import Image from '../../UI/Image/Image';
import { useNavigate } from 'react-router-dom';

import classes from '../../styles/AnimeItemSmall.module.scss';
import { publicRoutes } from '../../utils/routes';

interface AnimeItemSmallProps {
    anime: IAnime
}

const AnimeItemSmall: FC<AnimeItemSmallProps> = ({anime}) => {
    const navigate = useNavigate();

    return (
       <div className={classes['anime']} onClick={() => navigate(`/anime/${anime.mal_id}`)}>
           <div className={classes['image']}>
                <Image url={anime.images.jpg.image_url}/>
           </div>
           <div className={classes['body']}>
                <div className={classes['body__title']}>
                    <h5 className={classes['body__title_en']}>{anime?.title_english ? anime.title_english : anime?.title}</h5>
                    <h5 className={classes['body__title_jp']}>{anime?.title_japanese}</h5>
                </div>
           </div>
       </div>
    );
}

export default AnimeItemSmall;