import { FC, useEffect } from 'react';
import CarouselBlock from '../components/Carousel/CarouselBlock';
import classes from '../styles/HomePage.module.scss';

const HomePage:FC = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
       <div className={classes.homepage}>
            <CarouselBlock/>
       </div>
    );
}

export default HomePage;