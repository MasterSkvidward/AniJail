import React, {FC} from 'react';
import Image from '../Image/Image';

import classes from './ImageZoom.module.scss';

interface ImageZoomProps {
    url: string;
}

const ImageZoom:FC<ImageZoomProps> = ({url}) => {
    return (
        <div className={classes['image']}>
            <img src={url} alt="" />
        </div>
    );
}

export default ImageZoom;