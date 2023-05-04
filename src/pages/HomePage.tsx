import { FC, useLayoutEffect } from 'react';
import classes from '../styles/HomePage.module.scss';

const HomePage:FC = () => {
    
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
       <div className={classes.homepage}>
           
       </div>
    );
}

export default HomePage;