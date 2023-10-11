import React, {FC} from 'react';
import { IAnimeCharacter } from '../../types/jikanMoe/jikan';

import classes from "./PersonItem.module.scss";

interface PersonItemProps {
    character: IAnimeCharacter;
}

const PersonItem:FC<PersonItemProps> = ({character}) => {
    
    return (
       <div className={classes["item"]}>
            <div className={classes["item__image"]}>
                <img src={character.character.images.jpg.image_url || ""} alt={character.character.name || ""} />
            </div>
            <span className={classes["item__title"]}>{character.character.name || ""}</span>
       </div>
    );
}

export default PersonItem;