import React, {FC} from 'react';

import classes from '../../styles/AnimeDetails.module.scss';
import { IAnimeFull } from '../../types/jikan';

interface AnimeDetailsProps {
    anime: IAnimeFull | null
}

const AnimeDetails: FC<AnimeDetailsProps> = ({anime}) => {
    return (
       <div className={classes['anime-details']}>
           <div className={classes['description'] + ' ' + '_container'}>
                <h3 className={classes['description__title']}>Synopsis</h3>
                <p className={classes['description__body']}>{anime?.synopsis}</p>
           </div>
       </div>
    );
}

export default AnimeDetails;