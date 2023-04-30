import React, {useRef, FC, useState, useEffect, useLayoutEffect, MouseEvent} from 'react';
import classes from './SearchBar.module.scss';
import MyInput from '../MyInput/MyInput';
import {AiOutlineSearch} from 'react-icons/ai';
import AnimeItemSmall from '../../components/Anime/AnimeItemSmall';
import { IAnime, IAnimeSearchParams } from '../../types/jikan';
import useDebounce from '../../hooks/useDebounce';
import { AnimeService } from '../../API/AnimeService';


const SearchBar:FC = () => {

    const search = useRef<HTMLFormElement>(null);
    const [visible, setVisible] = useState<boolean>(false);
    const [value, setValue] = useState<string>('');
    const [animeItems, setAnimeItems] = useState<IAnime[] | []>([]);

    const debouncedSearch = useDebounce(searchAnime, 400);

    async function searchAnime() {
        const response = await AnimeService.getAnimeBySearch(searchParams);
        setAnimeItems(response);
    }

    const searchParams:IAnimeSearchParams = {
        letter: value,
        order_by: 'score',
        sort: 'desc',
        limit: 15,
        sfw: false,
    }

    const handlerFocusIn = (e: FocusEvent):void => {
        console.log('FocusIn');
        search.current?.classList.add(classes.focused);
        setVisible(true);
        e.stopPropagation();
    }

    const handlerClick = (e:MouseEvent):void => {
        e.stopPropagation()
    }

    const handlerClickMenu= (e:MouseEvent):void => {
        setVisible(false);
        e.stopPropagation()
    }

    const handlerMouseDown = (e:MouseEvent):void => {
        e.stopPropagation()
    }

    function handlerDocumentClick(e: Event):void {
        setVisible(false);
    }


    useEffect(() => {
        debouncedSearch()
    }, [value])

    useEffect(() => {
        document.addEventListener("mousedown", handlerDocumentClick);
        search.current?.addEventListener('focusin', handlerFocusIn)
    }, [])


    return (
       <form ref={search} className={visible? [classes.search, classes.focused].join(' ') :classes.search} onClick={handlerClick} onMouseDown={handlerMouseDown} onSubmit={e => e.preventDefault()}>
            <MyInput setValue={setValue} placeholder={'Search anime...'}/>
            <div className={classes.search__loupe}>
                <AiOutlineSearch/>
            </div>
            <div className={visible? [classes.search__list, classes.active].join(' ') :classes.search__list} onClick={handlerClickMenu}>
                <div className={classes.search__items}>
                    {animeItems.map((anime, index) => 
                        <AnimeItemSmall anime={anime} key={index}/>
                    )}   
                </div>
                <div className={classes['search__all']}>See all results for "{value}"</div>
                
            </div>
       </form>
    );
}

export default SearchBar;