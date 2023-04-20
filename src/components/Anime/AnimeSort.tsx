import React from 'react';
import classes from '../../styles/AnimeSort.module.scss';
import MySelect from '../../UI/MySelect/MySelect';
import AnimeList from './AnimeList';
import Filter from '../../UI/Filter/Filter';

const AnimeSort = () => {
    return (
       <div className={classes['anime']}>
           <div className={[classes['anime__container'], '_container'].join(' ')}>
                <h2 className={classes['anime__title']}>{'Catalog'}</h2>
                <div className={classes['anime__block']}>
                    <div className={classes['anime__column']}>
                        <div className={classes['anime__row']}>
                            <MySelect/>
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