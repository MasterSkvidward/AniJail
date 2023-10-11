import React, {FC, PropsWithChildren, Dispatch, SetStateAction, useRef, useEffect, KeyboardEvent} from 'react';
import classes from './MyModal.module.scss';


interface MyModalProps extends PropsWithChildren {
    visible: boolean,
    setVisible: Dispatch<SetStateAction<boolean>>;
}

const MyModal:FC<MyModalProps> = ({children, visible, setVisible}) => {
    const rootClasses = [classes['myModal']];
    if (visible) rootClasses.push(classes.active);

    const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>):void => {
        if (e.code === "Escape") setVisible(false); 
    }

    useEffect(() => {
        console.log(visible);
        
        visible 
            ?  document.body.classList.add("hide-scroll")
            :  document.body.classList.remove("hide-scroll")
    }, [visible])

    return (
       <div className={rootClasses.join(' ')} onMouseDown={() => setVisible(false)} onKeyDown={handleKeyDown}>
            {children}
       </div>
    );
}

export default MyModal;