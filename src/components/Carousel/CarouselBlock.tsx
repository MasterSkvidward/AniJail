import React from 'react';

import classes from '../../styles/CarouselBlock.module.scss';
import CarouselBlockItem from './CarouselBlockItem';

const CarouselBlock = () => {
    return (
        <section className={classes['carousel-block']}>
            <div className={'_container'}>
                <div className={classes['carousel-block__body']}>
                    <CarouselBlockItem title={'Spring Anime'}/>
                </div>
            </div>
        </section>
    );
}

export default CarouselBlock;