import React, {FC} from 'react';

import classes from '../../styles/AnimeDetails.module.scss';
import { IAnimeFull } from '../../types/jikan';

interface AnimeDetailsProps {
    anime: IAnimeFull | null
}

const AnimeDetails: FC<AnimeDetailsProps> = ({anime}) => {
    return (
       <div className={classes['anime__details']}>
           <div className={classes['description'] + ' ' + '_container'}>
                <h1 className={classes['description__title']}>Synopsis</h1>
                <p className={classes['description__body']}>{anime?.synopsis}</p>
           </div>
           
           <div className={classes['anime-page__video']}>
                <iframe width="560" height="315" src={anime?.trailer.embed_url} title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
       </div>
    );
}

export default AnimeDetails;