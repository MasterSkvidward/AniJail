import React, {FC, PropsWithChildren, Dispatch, SetStateAction, useRef, useEffect} from 'react';
import classes from './MyModal.module.scss';


interface MyModalProps extends PropsWithChildren {
    visible: boolean,
    setVisible: Dispatch<SetStateAction<boolean>>;
}

const MyModal:FC<MyModalProps> = ({children, visible, setVisible}) => {
    const rootClasses = [classes['myModal']];
    if (visible) rootClasses.push(classes.active);

    useEffect(() => {
        visible 
            ?  document.body.style.overflowY = "hidden"
            :  document.body.style.overflowY = "scroll"
    }, [visible])

    return (
       <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            {children}
       </div>
    );
}

export default MyModal;