import {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import AnimeSort from '../components/Anime/AnimeSort';
import { useTypedSelector } from '../hooks/useTypedSelector';
import classes from '../styles/Anime.module.scss';
import { useComponentDidMount } from '../hooks/useComponentDidMount';


const Anime = () => {
    return (
       <div className={classes['anime']}>
           <AnimeSort/>
       </div>
    );
}

export default Anime;