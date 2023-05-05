import React, {useEffect, useState, MouseEvent} from 'react';
import classes from '../../styles/AnimeList.module.scss';
import AnimeItem from './AnimeItem';
import { AnimeService } from '../../API/AnimeService';
import { useFetching } from '../../hooks/useFetching';
import { IAnime } from '../../types/jikanMoe/jikan';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const AnimeList = () => {
    const {anime, isLoading} = useTypedSelector(state => state.filter);
    const [previewIsVisible, setPreviewIsVisible] = useState(false);
    
    if (!anime.length && !isLoading) return (
        <div className={classes['empty']}>No Results</div>
    )

    const handlerMouseEnter = (e: MouseEvent) => {

    }

    const handlerMouseLeave = (e: MouseEvent) => {

    }


    return (
       <div className={classes['anime-list']}>
           <div className={classes['anime-list__grid']}>       
                {anime.map((item, index) => 
                    <div className={classes['anime-list__item']} key={index} onMouseEnter={handlerMouseEnter} onMouseLeave={handlerMouseLeave}>
                        <AnimeItem anime={item} />
                    </div>
                )}
           </div>
       </div>
    );
}

export default AnimeList;