import React, {useState, useEffect} from 'react';
import { AnimeService } from '../../API/AnimeService';
import classes from '../../styles/CarouselBlock.module.scss';
import CarouselBlockItem from './CarouselBlockItem';
import { bigCarouselOptions, smallCarouselOptions } from '../../utils/data';
import { getCurrentSeasonName } from '../../utils/utils';
import AnimeItem from '../Anime/AnimeItem';
import AnimeItemBig from '../Anime/AnimeItemBig';
import { ISingleAnime } from '../../types/anime/singleAnime';

const CarouselBlock = () => {
    const [animeCurrentSeason, setAnimeCurrentSeason] = useState<ISingleAnime[]>([]);

   
    const fetchAnime = async () => {
        const seasonAnime = await AnimeService.getAnimeById(21);
        const popularAnime = await AnimeService.getAnimeById(21);
        const dateAnime = await AnimeService.getAnimeById(21);
        // setAnimeCurrentSeason(seasonAnime);  
        setAnimeCurrentSeason([]);  
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