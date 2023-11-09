import React, {FC, PropsWithChildren, Dispatch, SetStateAction, useRef, useEffect, KeyboardEvent} from 'react';
import classes from './MyModal.module.scss';


interface MyModalProps extends PropsWithChildren {
    visible: boolean,
    setVisible: Dispatch<SetStateAction<boolean>>;
    contentStyles?: {}
}

const MyModal:FC<MyModalProps> = ({children, visible, setVisible, contentStyles}) => {
    const rootClasses = [classes['myModal']];
    if (visible) rootClasses.push(classes.active);

    const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>):void => {
        if (e.code === "Escape") setVisible(false); 
    }

    useEffect(() => {
        visible 
            ?  document.body.classList.add("hide-scroll")
            :  document.body.classList.remove("hide-scroll")
    }, [visible])

    return (
       <div className={rootClasses.join(' ')} onMouseDown={() => setVisible(false)} onKeyDown={handleKeyDown} style={contentStyles}>
            {children}
       </div>
    );
}

export default MyModal;