import React from 'react';

import classes from './Filter.module.scss';

const Filter = () => {
    return (
       <div className={classes['filter']}>
            <div className={classes['filter__row']}>
                <h3 className={classes['filter__title']}>Filter</h3>
            </div>

            <div className={classes['filter__column']}></div>
       </div>
    );
}

export default Filter;