import React from 'react';
import classes from '../styles/AnimeIdPage.module.scss';
import AnimeCard from '../components/Anime/AnimeCard';

const AnimeIdPage = () => {

    return (
       <div className={classes['anime-page']}>
           <AnimeCard/>
       </div>
    );
}

export default AnimeIdPage;