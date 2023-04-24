import React, {useEffect, useState} from 'react';
import classes from '../../styles/AnimeList.module.scss';
import AnimeItem from './AnimeItem';
import { AnimeService } from '../../API/AnimeService';
import { useFetching } from '../../hooks/useFetching';
import { IAnime } from '../../types/jikan';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const AnimeList = () => {
    const {anime} = useTypedSelector(state => state.filter)
    // const [anime, setAnime] = useState<IAnime | null>(null)

    //!

    // const [fetchAnime, animeIsLoading, animesError] = useFetching( async () => {
    //     const response = await AnimeService.getAnimeById(41467);
    //     setAnime(response)
    // })

    // const fetchAnime = async () => {
    //     const response = await AnimeService.getAnimeById(params.id);
    //     setAnime(response);
    // }

    // useEffect(() => {
    //     fetchAnime();
    // }, [])



    //!


    return (
       <div className={classes['anime-list']}>
           <div className={classes['anime-list__grid']}>
                {anime.map((item, index) => 
                    <AnimeItem anime={item} key={index}/>
                )}
           </div>
       </div>
    );
}

export default AnimeList;