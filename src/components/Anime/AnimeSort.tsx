import React, {useEffect, useState} from 'react';
import classes from '../../styles/AnimeSort.module.scss';
import MySelect from '../../UI/MySelect/MySelect';
import AnimeList from './AnimeList';
import Filter from '../../UI/Filter/Filter';
import { ISelectOption } from '../../types/userInteface';
import { sortCategories } from '../../utils/data';
import { useDispatch } from 'react-redux';
import { FilterActionCreators } from '../../store/reducers/filter/action-creatores';
import { IAnimeSearchParams } from '../../types/jikan';
import { useTypedSelector } from '../../hooks/useTypedSelector';


const AnimeSort = () => {
    const dispatch = useDispatch();
    const {params} = useTypedSelector(state => state.filter)

    useEffect(() => {
        dispatch(FilterActionCreators.setAnime(params));
    }, [params])



    return (
       <div className={classes['anime']}>
           <div className={[classes['anime__container'], '_container'].join(' ')}>
                <h2 className={classes['anime__title']}>{'Catalog'}</h2>
                <div className={classes['anime__block']}>
                    <div className={classes['anime__column']}>
                        <div className={classes['anime__row']}>
                            <MySelect options={sortCategories} selectedOption={1}/>
                        </div>
                        <AnimeList/>
                    </div>
                    <div className={classes['anime__filter']}>
                        <Filter/>
                    </div>
                </div>
           </div>
       </div>
    );
}

export default AnimeSort;