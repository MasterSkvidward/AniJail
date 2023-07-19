import React, { FC } from 'react';
import classes from './404.module.scss';

const Error:FC = () => {
    return (
       <div className={classes.error}>
           404
       </div>
    );
}

export default Error;