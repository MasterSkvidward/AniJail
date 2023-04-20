import React from 'react';
import classes from './Loader.module.css';

const Loader = () => {
    return (
        <div className={classes.flow}>
            <div className={classes.dot}></div>
            <div className={classes.dot}></div>
            <div className={classes.dot}></div>
        </div>
    );
}

export default Loader;