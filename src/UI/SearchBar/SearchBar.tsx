import React, {useRef, FC, useState, useEffect, useLayoutEffect, MouseEvent} from 'react';
import classes from './SearchBar.module.scss';
import MyInput from '../MyInput/MyInput';
import {AiOutlineSearch} from 'react-icons/ai';
import AnimeItemSmall from '../../components/Anime/AnimeItemSmall';
import { IAnime } from '../../types/jikan';


const SearchBar:FC = () => {
    const placeholder:string = 'Search anime...'
    const search = useRef<HTMLFormElement>(null);
    const [visible, setVisible] = useState<boolean>(false);
    const [animeItems, setAnimeItems] = useState<IAnime[] | []>([]);

    const handlerFocusIn = (e: FocusEvent):void => {
        console.log('FocusIn');
        setVisible(true);
    }

    const handlerClick = (e:MouseEvent):void => {
        search.current?.classList.add(classes.focused);
        console.log('Click');
        e.stopPropagation()
    }

    function handlerDocumentClick(e: Event):void {
        console.log('Document Click');
        setVisible(false);
    }

    useEffect(() => {
        document.addEventListener("click", handlerDocumentClick);
        search.current?.addEventListener('focusin', handlerFocusIn)
    }, [])


    return (
       <form ref={search} className={classes.search} onClick={handlerClick}>
            <MyInput placeholder={placeholder}/>
            <div className={classes.search__loupe}>
                <AiOutlineSearch/>
            </div>
            <div className={visible? [classes.search__list, classes.active].join(' ') :classes.search__list}>
                Nothing yet...
                <div className={classes.search__items}>
                    {animeItems.map(anime => 
                        <AnimeItemSmall anime={anime}/>
                    )}  
                    
                </div>
               
            </div>
       </form>
    );
}

export default SearchBar;