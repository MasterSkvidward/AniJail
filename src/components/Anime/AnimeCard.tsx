import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import classes from '../../styles/AnimeCard.module.scss';
import { AnimeService } from '../../API/AnimeService';
import { IAnimeFull } from '../../types/jikan';
import AnimeCardInfo from './AnimeCardInfo';
import background_img from '../../images/onepiece_2560x1440.jpg';

type ParamsType = {
    id: string;
}

const AnimeCard = () => {
    const params = useParams<ParamsType>();
    console.log(params);
    
    const [anime, setAnime] = useState<IAnimeFull | null>(null);

    const fetchAnime = async () => {
        const response = await AnimeService.getAnimeById(params.id);
        setAnime(response);
    }

    useEffect(() => {
        fetchAnime();
    }, [])

    return (
       <div className={classes['anime-card']}>
            <div className={classes['anime-card__header']}>
                <div className={classes['anime-card__background']}>
                    <img src={background_img} alt="OnePiece" />
                </div>
            </div>
            <div className={[classes['anime-card__container'], '_container'].join(' ')}>
                <div className={classes['anime-card__image']}>
                        <img src={anime?.images.jpg.image_url}></img>
                </div>


                <div className={classes['anime-card__body']}>
                    <AnimeCardInfo anime={anime}/>
                </div>
           </div>
       </div>
    );
}

export default AnimeCard;