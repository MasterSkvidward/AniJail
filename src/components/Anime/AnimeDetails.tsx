import React, {FC, useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

import classes from '../../styles/AnimeDetails.module.scss';
import { IAnimeFull } from '../../types/jikan';
import Title from '../../UI/Title/Title';
import { AnimeService } from '../../API/AnimeService';
import { IAnimePicture } from '../../types/jikan';
import Image from '../../UI/Image/Image';

interface AnimeDetailsProps {
    anime: IAnimeFull | null
    animePictures: IAnimePicture[] | []
}

type ParamsType = {
    id: string;
}

const AnimeDetails: FC<AnimeDetailsProps> = ({anime, animePictures}) => {

    return (
        <div className={classes['anime-details']}>
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
                        {animePictures.map(picture =>
                            <Image url={picture.jpg.image_url} maxWidth={'300'} maxHeight={'172'}/>
                        )}
                    </div>
                   
                </div>
                    
            </div>
        </div>
    );
}

export default AnimeDetails;