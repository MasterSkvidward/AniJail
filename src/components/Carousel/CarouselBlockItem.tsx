import React, {FC, useState, useEffect} from 'react';
import Carousel from '../../UI/Carousel/Carousel';


import classes from '../../styles/CarouselBlockItem.module.scss';
import AnimeItem from '../Anime/AnimeItem';
import { IAnime } from '../../types/jikanMoe/jikan';
import { AnimeService } from '../../API/AnimeService';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';

interface CarouselBlockItemProps {
    title: string,
    items: IAnime[],
}

const CarouselBlockItem:FC<CarouselBlockItemProps> = ({title, items}) => {

    return (
       <div className={classes['carousel-item']}>
            <h3 className={classes['carousel-item__title']}>{title}</h3>
            <div className={classes['carousel-item__body']}>
                <Carousel items={items}/>
           </div>
       </div>
    );
}

export default CarouselBlockItem;