import React, {useState, useEffect} from 'react';
import { IAnime } from '../../types/jikanMoe/jikan';
import { AnimeService } from '../../API/AnimeService';
import classes from '../../styles/CarouselBlock.module.scss';
import CarouselBlockItem from './CarouselBlockItem';

const CarouselBlock = () => {
    const [animeCurrentSeason, setAnimeCurrentSeason] = useState<IAnime[]>([]);

    const fetchAnime = async () => {
        const response = await AnimeService.getAnimeSeasonNow();
        setAnimeCurrentSeason(response);  
    }

    useEffect(() => {
        fetchAnime();
    }, [])

    return (
        <section className={classes['carousel-block']}>
            <div className={'_container'}>
                <div className={classes['carousel-block__body']}>
                    <CarouselBlockItem title={'Spring Anime'} items={animeCurrentSeason}/>
                    <CarouselBlockItem title={'Spring Anime'} items={animeCurrentSeason}/>
                </div>
            </div>
        </section>
    );
}

export default CarouselBlock;