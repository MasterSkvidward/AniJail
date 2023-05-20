import React, {useState, useEffect, useLayoutEffect} from 'react';
import classes from '../styles/AnimeIdPage.module.scss';
import AnimeCard from '../components/Anime/AnimeCard';
import { useParams } from 'react-router-dom';
import { AnimeService } from '../API/AnimeService';
import AnimeDetails from '../components/Anime/AnimeDetails';
import { useFetching } from '../hooks/useFetching';
import { ISingleAnime } from '../types/anime/singleAnime';


type ParamsType = {
    id: string;
}

const AnimeIdPage = () => {
    const params = useParams<ParamsType>();
    
    const [anime, setAnime] = useState<ISingleAnime | null>(null);
    // const [animePictures, setAnimePictures] = useState<IAnimePicture[] | []>([]);
    const [similarAnime, setSimilarAnime] = useState<ISingleAnime[]>([]);

    const fetchSimilar = async () => {
        const response = await AnimeService.getAnimeById(21);
        // setSimilarAnime(response);
        setSimilarAnime([]);
    }

    const [fetchAnime, animeIsLoading, animesError] = useFetching( async () => {
        const response = await AnimeService.getAnimeById(params.id);
        setAnime(response);

    })

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
        fetchAnime();
        fetchSimilar();
    }, [params])

    if (animeIsLoading) return (<></>);

    return (
       <div className={classes['anime-page']}>
           <AnimeCard anime={anime}/>
           <AnimeDetails similarAnime={similarAnime} anime={anime}/>
       </div>
    );
}

export default AnimeIdPage;