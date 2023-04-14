import {FC} from 'react';

import classes from './Image.module.scss';

interface ImageProps {
    url: string
    alt?: string
    maxWidth: string
    maxHeight: string
}

const Image: FC<ImageProps> = ({maxWidth, maxHeight, url, alt}) => {
    return (
       <div className={classes.image} style={{maxWidth: maxWidth, maxHeight: maxHeight}}>
           <img src={url} alt={alt}/>
       </div>
    );
}

export default Image;