import React, { FC } from 'react';
import classes from './Error404Page.module.scss';

const Error404Page:FC = () => {
    return (
       <div className={classes.error}>
           404
       </div>
    );
}

export default Error404Page;