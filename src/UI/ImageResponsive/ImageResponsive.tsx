import React, {useRef, FC} from 'react';

import classes from './ImageResponsive.module.scss';

interface ImageResponsiveProps {
    url: string
}

const ImageResponsive:FC<ImageResponsiveProps> = ({url}) => {
    const content = useRef<HTMLDivElement>(null);

    const clickHandler = (e:React.MouseEvent):void => {
        content.current?.classList.toggle(classes.large);
        e.stopPropagation();
    }

    return (
        <div ref={content} className={classes['content']} onClick={clickHandler} onSelect={e => false}>
            <img src={url} alt="" />
        </div>
    );
}

export default ImageResponsive;