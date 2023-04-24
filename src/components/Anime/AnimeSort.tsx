import React, {useEffect} from 'react';
import classes from '../../styles/AnimeSort.module.scss';
import MySelect from '../../UI/MySelect/MySelect';
import AnimeList from './AnimeList';
import Filter from '../../UI/Filter/Filter';
import { ISelectOption } from '../../types/userInteface';
import { sortCategories } from '../../utils/data';
import { useDispatch } from 'react-redux';
import { FilterActionCreators } from '../../store/reducers/filter/action-creatores';


const AnimeSort = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(FilterActionCreators.setAnime({order_by: sortCategories[1].order_by, sort: sortCategories[1].sort}));
    }, [])

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