import React, {FC, useState, useEffect} from 'react';
import Carousel from '../../UI/Carousel/Carousel';


import classes from '../../styles/CarouselBlockItem.module.scss';
import AnimeItem from '../Anime/AnimeItem';
import { IAnime } from '../../types/jikanMoe/jikan';
import { AnimeService } from '../../API/AnimeService';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';

interface CarouselBlockItemProps {
    title: string,
}

const CarouselBlockItem:FC<CarouselBlockItemProps> = ({title}) => {
    const [animeCurrentSeason, setAnimeCurrentSeason] = useState<IAnime[]>([]);

    const fetchAnime = async () => {
        const response = await AnimeService.getAnimeSeasonNow();
        setAnimeCurrentSeason(response);  
    }

    console.log(animeCurrentSeason);
    

    useEffect(() => {
        fetchAnime();
    }, [])

    return (
       <div className={classes['carousel-item']}>
            <h3 className={classes['carousel-item__title']}>{title}</h3>
            <div className={classes['carousel-item__body']}>
                <Carousel items={animeCurrentSeason}/>
           </div>
       </div>
    );
}

export default CarouselBlockItem;