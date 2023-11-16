import React, { FC } from 'react';
import classes from './Error404Page.module.scss';

import page_404 from "../../assets/images/404.jpg";

const Error404Page:FC = () => {
    return (
       <div className={classes.error}>
           <img src={page_404} alt="Error 404" />
       </div>
    );
}

export default Error404Page;