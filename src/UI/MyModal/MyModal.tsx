import React, {FC, PropsWithChildren, Dispatch, SetStateAction, useRef, useEffect, KeyboardEvent} from 'react';
import classes from './MyModal.module.scss';


interface MyModalProps extends PropsWithChildren {
    visible: boolean,
    setVisible: Dispatch<SetStateAction<boolean>>;
}

const MyModal:FC<MyModalProps> = ({children, visible, setVisible}) => {
    const rootClasses = [classes['myModal']];
    if (visible) rootClasses.push(classes.active);

    const handleMouseDown = (e: KeyboardEvent<HTMLDivElement>):void => {
        if (e.code === "Escape") setVisible(false); 
    }

    useEffect(() => {
        visible 
            ?  document.body.classList.add(classes["hide-scroll"])
            :  document.body.classList.remove(classes["hide-scroll"])
    }, [visible])

    return (
       <div className={rootClasses.join(' ')} onClick={() => setVisible(false)} onKeyDown={handleMouseDown}>
            {children}
       </div>
    );
}

export default MyModal;