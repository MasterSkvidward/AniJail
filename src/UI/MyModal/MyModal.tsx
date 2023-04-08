import React, {FC, PropsWithChildren, Dispatch, SetStateAction, useRef} from 'react';
import classes from './MyModal.module.scss';


interface MyModalProps extends PropsWithChildren {
    visible: boolean,
    setVisible: Dispatch<SetStateAction<boolean>>;
    image: string,
}

const MyModal:FC<MyModalProps> = ({children, visible, setVisible, image}) => {
    const rootClasses = [classes['myModal']];
    if (visible) rootClasses.push(classes.active);
    const content = useRef<HTMLDivElement>(null);

    const clickHandler = (e:React.MouseEvent):void => {
        content.current?.classList.toggle(classes.large);
        e.stopPropagation();
    }

    return (
       <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div ref={content} className={classes['myModal__content']} onClick={clickHandler} onSelect={e => false}>
                <img src={image} alt="" />
            </div>
            
       </div>
    );
}

export default MyModal;