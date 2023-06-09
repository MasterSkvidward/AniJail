import React, {FC} from 'react';
import Image from '../../UI/Image/Image';
import { useNavigate } from 'react-router-dom';
import { formatGenres } from '../../utils/utils';

import classes from '../../styles/AnimeItemSmall.module.scss';
import { publicRoutes } from '../../utils/routes';
import Score from '../../UI/Score/Score';
import { IAnimeListItem } from '../../types/anime/animeList';

interface AnimeItemSmallProps {
    anime: IAnimeListItem
}

const AnimeItemSmall: FC<AnimeItemSmallProps> = ({anime}) => {
    const navigate = useNavigate();

    return (
       <div className={classes['anime']} onClick={() => navigate(`/anime/${anime.id}`)}>
           <div className={classes['image']}>
                <Image url={anime.images.jpg.image_url}/>
           </div>
           <div className={classes['body']}>
                <div className={classes['body__title']}>
                    <h5 className={classes['body__title_en']}>{anime?.title_english ? anime.title_english : anime?.title}</h5>
                    <h5 className={classes['body__title_jp']}>{anime?.title_japanese}</h5>
                </div>

                <div className={classes['body__type']}>{anime.year? `${anime.type}, ${anime.year}` : anime.type}</div>

                <div className={classes['body__info']}>
                    <Score score={anime?.score} fontSize={15}/>
                    <div className={classes['body__genres']}>
                        {/* {formatGenres(anime?.genres).map((genre, index) => 
                            <div className={classes['body__genre']} key={index}>{genre}</div>
                        )} */}
                    </div>
                </div>
           </div>
       </div>
    );
}

export default AnimeItemSmall;