import React, {useState, useEffect} from 'react';
import { IAnime } from '../../types/jikanMoe/jikan';
import { AnimeService } from '../../API/AnimeService';
import classes from '../../styles/CarouselBlock.module.scss';
import CarouselBlockItem from './CarouselBlockItem';
import { bigCarouselOptions, smallCarouselOptions } from '../../utils/data';
import { getCurrentSeasonName } from '../../utils/utils';
import AnimeItem from '../Anime/AnimeItem';
import AnimeItemBig from '../Anime/AnimeItemBig';

const CarouselBlock = () => {
    const [animeCurrentSeason, setAnimeCurrentSeason] = useState<IAnime[]>([]);

   
    const fetchAnime = async () => {
        const seasonAnime = await AnimeService.getAnimeSeasonNow();
        const popularAnime = await AnimeService.getAnimeSeasonNow();
        const dateAnime = await AnimeService.getAnimeSeasonNow();
        setAnimeCurrentSeason(seasonAnime);  
    }

    useEffect(() => {
        fetchAnime();
    }, [])

    if (!animeCurrentSeason) return (<></>)

    return (
        <section className={classes['carousel-block']}>
            <div className={'_container1800'}>
                <div className={classes['carousel-block__body']}>
                    <CarouselBlockItem title={`${getCurrentSeasonName()} season`} options={bigCarouselOptions}>
                        {animeCurrentSeason.map((item, index) => 
                            <AnimeItemBig anime={item} key={index}/>
                        )}
                    </CarouselBlockItem>

                    <CarouselBlockItem title={`Anime for you`} options={smallCarouselOptions} arrowTop={40}>
                        {animeCurrentSeason.map((item, index) => 
                            <AnimeItem anime={item} key={index}/>
                        )}
                    </CarouselBlockItem>

                    <CarouselBlockItem title={'Popular'} options={smallCarouselOptions} arrowTop={40}>
                        {animeCurrentSeason.map((item, index) => 
                                <AnimeItem anime={item} key={index}/>
                        )}
                    </CarouselBlockItem>

                    <CarouselBlockItem title={'A-Z'} options={smallCarouselOptions} arrowTop={40}>
                        {animeCurrentSeason.map((item, index) => 
                                <AnimeItem anime={item} key={index}/>
                        )}
                    </CarouselBlockItem>
                </div>
            </div>
        </section>
    );
}

export default CarouselBlock;