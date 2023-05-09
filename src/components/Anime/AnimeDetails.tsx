import React, {FC, useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

import classes from '../../styles/AnimeDetails.module.scss';
import { IAnimeFull } from '../../types/jikanMoe/jikan';
import Title from '../../UI/Title/Title';
import { AnimeService } from '../../API/AnimeService';
import { IAnimePicture } from '../../types/jikanMoe/jikan';
import Image from '../../UI/Image/Image';
import { ISingleAnime } from '../../types/anime/singleAnime';
import Carousel from '../../UI/Carousel/Carousel';
import { smallCarouselOptions } from '../../utils/data';
import { IAnime } from '../../types/jikanMoe/jikan';
import AnimeItem from './AnimeItem';

interface AnimeDetailsProps {
    anime: IAnimeFull | null
    animePictures: IAnimePicture[] | []
    similarAnime: IAnime[]
}

type ParamsType = {
    id: string;
}

const AnimeDetails: FC<AnimeDetailsProps> = ({similarAnime, anime, animePictures}) => {

    return (
        <section className={classes['anime-details']}>
            <div className={classes['anime-details__container'] + ' ' + '_container1800'}>

                <div className={classes['description']}>
                    <Title value={'Synopsis'}/>
                    <p className={classes['description__body']}>{anime?.synopsis}</p>
                </div>

{/* 
                <div className={classes['trailer']}>
                    <Title value={'Trailer'}/>
                    <div className={classes['trailer__video']}>
                        <iframe src={anime?.trailer.embed_url} title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                </div> */}

                
                <div className={classes['images']}>
                    <Title value={'Images'}/>
                    <div className={classes['images__container']}>
                        {animePictures.map((picture, index) =>
                            <Image url={picture.jpg.image_url} key={index}/>
                        )}
                    </div>
                   
                </div>

                <div className={classes['carousel']}>
                    <Title value={'You may also like'}/>
                    <Carousel options={smallCarouselOptions} arrowTop={40}>
                        {similarAnime.map((item, index) => 
                                    <AnimeItem anime={item} key={index}/>
                        )}
                    </Carousel>
                </div>
                    
            </div>
        </section>
    );
}

export default AnimeDetails;