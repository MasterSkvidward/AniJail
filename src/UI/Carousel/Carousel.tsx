import React, {FC, PropsWithChildren, useState} from 'react';
// import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/core';
// import '@splidejs/react-splide/css/sea-green';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import AnimeItem from '../../components/Anime/AnimeItem';
import classes from './Carousel.module.scss';
import { IAnime } from '../../types/jikanMoe/jikan';
import arrowRight from '../../images/arrowRight.svg';
import {IoIosArrowDropleft} from 'react-icons/io';
import {IoIosArrowDropright} from 'react-icons/io';

interface CarouselProps {
    items: IAnime[],
}


const Carousel:FC<CarouselProps> = ({items}) => {


    const mediaBreakpoints = {
        1428: {
            perPage: 6,
        },

        1220: {
            perPage: 5,
        },

        1010: {
            perPage: 4,
        },

        820: {
            perPage: 3,
        },
    }

    return (
        // <div className={classes['carousel']}>
            <Splide hasTrack={ false } 
                    aria-label="MySlider"  
                    options={ {
                        speed: 600,
                        // height : '275px',
                        rewind : true,
                        gap    : '20px',
                        interval: 7000,
                        autoplay: true,
                        lazyLoad: 'nearby',
                        perPage: 7,
                        // fixedWidth: 190,
                        arrows: true,
                        // arrowPath: arrowRight,

                        breakpoints: mediaBreakpoints,
                    } }>

                <div className={classes['carousel__wrapper']}>
                    
                    <SplideTrack>
                        {items.map((item, index) => 
                            <SplideSlide key={index}>
                                <AnimeItem anime={item}/>
                            </SplideSlide>)}
                    </SplideTrack>
                    

                    <div className="splide__arrows">
                        <button className={["splide__arrow splide__arrow--next", classes['carousel__arrow'], classes['carousel__leftArrow']].join(' ')}><IoIosArrowDropright/></button>  
                        <button className={["splide__arrow splide__arrow--prev", classes['carousel__arrow'], classes['carousel__rightArrow']].join(' ')}><IoIosArrowDropleft/></button>
                    </div>
                </div>
            </Splide>
        // </div>
    );
}

export default Carousel;