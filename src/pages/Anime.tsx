import React from 'react';
import AnimeSort from '../components/Anime/AnimeSort';
import classes from '../styles/Anime.module.scss';

const Anime = () => {
    return (
       <div className={classes['anime']}>
           <AnimeSort/>
       </div>
    );
}

export default Anime;