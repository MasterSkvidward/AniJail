import React, {FC, useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

import classes from '../../styles/AnimeDetails.module.scss';
import { IAnimeFull } from '../../types/jikanMoe/jikan';
import Title from '../../UI/Title/Title';
import { AnimeService } from '../../API/AnimeService';
import { IAnimePicture } from '../../types/jikanMoe/jikan';
import Image from '../../UI/Image/Image';
import { ISingleAnime } from '../../types/anime/singleAnime';

interface AnimeDetailsProps {
    anime: ISingleAnime | null
    animePictures: IAnimePicture[] | []
}

type ParamsType = {
    id: string;
}

const AnimeDetails: FC<AnimeDetailsProps> = ({anime, animePictures}) => {

    return (
        <section className={classes['anime-details']}>
            <div className={classes['anime-details__container'] + ' ' + '_container'}>

                <div className={classes['description']}>
                    <Title value={'Synopsis'}/>
                    <p className={classes['description__body']}>{anime?.synopsis}</p>
                </div>


                <div className={classes['trailer']}>
                    <Title value={'Trailer'}/>
                    <div className={classes['trailer__video']}>
                        <iframe src={anime?.trailer.embed_url} title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                </div>

                
                <div className={classes['images']}>
                    <Title value={'Images'}/>
                    <div className={classes['images__container']}>
                        {animePictures.map((picture, index) =>
                            <Image url={picture.jpg.image_url} key={index}/>
                        )}
                    </div>
                   
                </div>
                    
            </div>
        </section>
    );
}

export default AnimeDetails;