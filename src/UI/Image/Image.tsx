import {FC} from 'react';

import classes from './Image.module.scss';

interface ImageProps {
    url: string
    alt?: string
}

const Image: FC<ImageProps> = ({url, alt}) => {
    return (
       <div className={classes.image}>
           <img src={url} alt={alt}/>
       </div>
    );
}

export default Image;