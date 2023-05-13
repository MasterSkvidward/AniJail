import React from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import classes from '../../styles/AnimeWatchList.module.scss';
import AnimeItemSmall from './AnimeItemSmall';
import MyTable from '../../UI/MyTable/MyTable';
import { watchListHeadlines } from '../../utils/data';


const AnimeWatchList = ({}) => {
    const {anime} = useTypedSelector(state => state.filter);

    return (
       <div className={classes['watchlist']}>
            <div className={classes['watchlist__list']}>

                <MyTable headlines={watchListHeadlines} data={anime}/>
                {/* <MyTable headlines={watchListHeadlines}>
                    {anime.map((item, index) =>
                        <>
                            <span>{index+1}</span>
                            <AnimeItemSmall anime={item} key={index}/>
                        </>
                    )}
                </MyTable> */}
               
            </div>
           
       </div>
    );
}

export default AnimeWatchList;