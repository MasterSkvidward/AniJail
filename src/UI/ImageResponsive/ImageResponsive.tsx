import React, {useRef, FC, useEffect} from 'react';

import classes from './ImageResponsive.module.scss';
import Image from '../Image/Image';

interface ImageResponsiveProps {
    url: string
}

const ImageResponsive:FC<ImageResponsiveProps> = ({url}) => {
    const content = useRef<HTMLDivElement>(null);

    const handlerMouseDown = (e:React.MouseEvent):void => {
        content.current?.classList.toggle(classes.large);
        e.stopPropagation();
    }

    return (
        <div ref={content} className={classes['content']} onMouseDown={handlerMouseDown} onSelect={e => false}>
            <Image url={url || ""}/>
            {/* <img src={url} alt="" /> */}
        </div>
    );
}

export default ImageResponsive;