import React, {FC, PropsWithChildren, useState} from 'react';
// import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/core';
// import '@splidejs/react-splide/css/sea-green';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import AnimeItem from '../../components/Anime/AnimeItem';
import classes from './Carousel.module.scss';
import { IAnime } from '../../types/jikanMoe/jikan';
import {IoIosArrowDropleft} from 'react-icons/io';
import {IoIosArrowDropright} from 'react-icons/io';

interface CarouselProps extends PropsWithChildren {
    options?: any,
    arrowTop?: number,
}


const Carousel:FC<CarouselProps> = ({options, arrowTop=50, children}) => {
    return (
        <Splide hasTrack={ false } aria-label="MySlider" options={options}>
            <div className={classes['carousel__wrapper']}>
                <SplideTrack>
                        {React.Children.map(children, (child) => 
                            <SplideSlide>
                                {child}
                            </SplideSlide>
                        )}
                </SplideTrack>
                
                <div className="splide__arrows">
                    <button style={{top: `${arrowTop}%`}} className={["splide__arrow splide__arrow--next", classes['carousel__arrow'], classes['carousel__leftArrow']].join(' ')}><IoIosArrowDropright/></button>  
                    <button style={{top: `${arrowTop}%`}} className={["splide__arrow splide__arrow--prev", classes['carousel__arrow'], classes['carousel__rightArrow']].join(' ')}><IoIosArrowDropleft/></button>
                </div>
            </div>
        </Splide>
    );
}

export default Carousel;