import {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import AnimeSort from '../components/Anime/AnimeSort';
import { useTypedSelector } from '../hooks/useTypedSelector';
import classes from '../styles/Anime.module.scss';
import { useComponentDidMount } from '../hooks/useComponentDidMount';


const Anime = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
       <div className={classes['anime']}>
           <AnimeSort/>
       </div>
    );
}

export default Anime;