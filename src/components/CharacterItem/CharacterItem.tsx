import React, { FC } from "react";
import { IAnimeCharacter } from "../../types/jikanMoe/jikan";

import classes from "./CharacterItem.module.scss";
import ContentLoader from "react-content-loader";

interface CharacterItemProps {
   // character: IAnimeCharacter
   // src: string
   // name: string
   character: IAnimeCharacter | null;
}

const CharacterItem: FC<CharacterItemProps> = ({ character }) => {
   //    if (!character)
   //       return (
   //          <ContentLoader
   //             speed={2}
   //             className={classes["skeleton"]}
   //             foregroundColor="var(--background-secondary)"
   //             backgroundColor="var(--background-skeleton)"
   //          >
   //             <rect x="0" y="0" rx="2" ry="2" width="500" height="500"/>
   //          </ContentLoader>
   //       );

   return (
      <div className={classes["item"]}>
         <div className={classes["item__image"]}>
            <img src={character?.character.images.jpg.image_url || ""} alt={character?.character.name || ""} />
         </div>
         <span className={classes["item__title"]}>{character?.character.name || ""}</span>
      </div>
   );
};

export default CharacterItem;
