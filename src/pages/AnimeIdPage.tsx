import React, {useState, useEffect} from 'react';
import classes from '../styles/AnimeIdPage.module.scss';
import AnimeCard from '../components/Anime/AnimeCard';

import { useParams } from 'react-router-dom';
import { AnimeService } from '../API/AnimeService';
import { IAnimeFull } from '../types/jikan';
import AnimeDetails from '../components/Anime/AnimeDetails';

type ParamsType = {
    id: string;
}

const AnimeIdPage = () => {
   
    const params = useParams<ParamsType>();
    
    const [anime, setAnime] = useState<IAnimeFull | null>(null);

    const fetchAnime = async () => {
        const response = await AnimeService.getAnimeById(params.id);
        setAnime(response);
    }

    useEffect(() => {
        fetchAnime();
    }, [])


    return (
       <div className={classes['anime-page']}>
           <AnimeCard anime={anime}/>
           <AnimeDetails anime={anime}/>

           
       </div>
    );
}

export default AnimeIdPage;