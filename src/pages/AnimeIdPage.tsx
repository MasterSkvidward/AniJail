import React, {useState, useEffect, useLayoutEffect} from 'react';
import classes from '../styles/AnimeIdPage.module.scss';
import AnimeCard from '../components/Anime/AnimeCard';

import { useParams } from 'react-router-dom';
import { AnimeService } from '../API/AnimeService';
import { IAnimeFull, IAnimePicture } from '../types/jikan';
import AnimeDetails from '../components/Anime/AnimeDetails';


type ParamsType = {
    id: string;
}

const AnimeIdPage = () => {
    const params = useParams<ParamsType>();
    
    const [anime, setAnime] = useState<IAnimeFull | null>(null);
    const [animePictures, setAnimePictures] = useState<IAnimePicture[] | []>([]);

    const fetchAnimePictures = async () => {
        const response = await AnimeService.getAnimePictures(params.id);    
        setAnimePictures(response);
    }

    const fetchAnime = async () => {
        const response = await AnimeService.getAnimeById(params.id);
        setAnime(response);
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        fetchAnime();
        fetchAnimePictures();
    }, [params])


    return (
       <div className={classes['anime-page']}>
           <AnimeCard anime={anime}/>
           <AnimeDetails anime={anime} animePictures={animePictures}/>
       </div>
    );
}

export default AnimeIdPage;