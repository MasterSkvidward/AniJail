import React, {useEffect, useState} from 'react';
import classes from '../../styles/AnimeList.module.scss';
import AnimeItem from './AnimeItem';
import { AnimeService } from '../../API/AnimeService';
import { useFetching } from '../../hooks/useFetching';
import { IAnime } from '../../types/jikan';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const AnimeList = () => {
    const {anime} = useTypedSelector(state => state.filter)
    
    if (!anime.length) return (
        <div className={classes['empty']}>No Results</div>
    )


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