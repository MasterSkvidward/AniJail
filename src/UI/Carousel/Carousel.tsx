import React, {FC, PropsWithChildren} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import AnimeItem from '../../components/Anime/AnimeItem';
import classes from './Carousel.module.scss';
import { IAnime } from '../../types/jikanMoe/jikan';


interface CarouselProps {
    items: IAnime[],
}

const Carousel:FC<CarouselProps> = ({items}) => {
    return (
        <Splide hasTrack={ false } 
                aria-label="MySlider"  
                options={ {
                    perPage: 5,
                    height : '280px',
                    rewind : true,
                    gap    : '15px',
                } }>
            <div className={classes['carousel']}>
                <SplideTrack>
                        {/* <div className={classes['carousel__items']}> */}
                            {items.map((item, index) => 
                                 <SplideSlide>
                                    {/* <div className={classes['carousel__item']} key={index}> */}
                                        <AnimeItem anime={item}/>
                                    {/* </div> */}
                                </SplideSlide>
                             )}
                        {/* </div> */}
                </SplideTrack>

                {/* <div className="splide__arrows">
                    <button className="splide__arrow splide__arrow--prev">Prev</button>
                    <button className="splide__arrow splide__arrow--next">Next</button>
                </div> */}
            </div>
        </Splide>
    );
}

export default Carousel;