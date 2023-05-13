import {FC} from 'react';
import { getAnimeScore } from '../../utils/utils';
import classes from './Image.module.scss';

interface ImageProps {
    url: string
    alt?: string
    score?: number
}

const Image: FC<ImageProps> = ({url, alt, score}) => {
    return (
       <div className={classes.image} style={{background: `url(${url}) 0 0 / cover no-repeat`}}>
           {/* <img src={url} alt={alt}/> */}
           {score &&
                <div className={classes.rating}>
                    <div className={classes.ratingNumber}>{getAnimeScore(score)}</div>
                </div>
            }
       </div>
    );
}

export default Image;