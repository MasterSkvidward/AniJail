import React from 'react';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import AnimeItem from '../AnimeItem/AnimeItem';

import classes from "./AnimeListGrid.module.scss";

const AnimeListGrid = () => {
    const { anime, isLoading, error, hasMoreAnime } = useTypedSelector((state) => state.filter);

    return (
       <div className={classes["anime"]}>
            {anime.length > 0
               ? anime.map((item, index) => (
                    //    <div className={classes["anime-list__item"]} key={index}>
                    <AnimeItem anime={item} showPreview={true} key={index} />
                    //    </div>
                 ))
               : [...new Array(24)].map((item, index) => <AnimeItem anime={null} key={index} />)}
       </div>
    );
}

export default AnimeListGrid;