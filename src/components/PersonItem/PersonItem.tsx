import React, {FC} from 'react';
import { IAnimeCharacter } from '../../types/jikanMoe/jikan';

import classes from "./PersonItem.module.scss";

interface PersonItemProps {
    // character: IAnimeCharacter
    src: string
    name: string
}

const PersonItem:FC<PersonItemProps> = ({src, name}) => {
    
    return (
       <div className={classes["item"]}>
            <div className={classes["item__image"]}>
                <img src={src || ""} alt={name || ""} />
            </div>
            <span className={classes["item__title"]}>{name || ""}</span>
       </div>
    );
}

export default PersonItem;