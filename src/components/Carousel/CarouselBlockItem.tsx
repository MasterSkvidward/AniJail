import React, {FC, useState, useEffect, PropsWithChildren} from 'react';
import Carousel from '../../UI/Carousel/Carousel';


import classes from '../../styles/CarouselBlockItem.module.scss';
import AnimeItem from '../Anime/AnimeItem';
import { IAnime } from '../../types/jikanMoe/jikan';
import { AnimeService } from '../../API/AnimeService';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';

interface CarouselBlockItemProps extends PropsWithChildren{
    title: string,
    options?: any,
    arrowTop?: number,
}

const CarouselBlockItem:FC<CarouselBlockItemProps> = ({title, options, children, arrowTop}) => {
    

    return (
       <div className={classes['carousel-item']}>
            <h3 className={classes['carousel-item__title']}>{title}</h3>
            <div className={classes['carousel-item__body']}>
                <Carousel options={options} arrowTop={arrowTop}>
                    {children}
                </Carousel>
           </div>
       </div>
    );
}

export default CarouselBlockItem;