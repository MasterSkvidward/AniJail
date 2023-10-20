import React, { FC } from "react";

import classes from "./AnimeCharacters.module.scss";
import Carousel from "../../../UI/Carousel/Carousel";
import CharacterItem from "../../CharacterItem/CharacterItem";
import Title from "../../../UI/Title/Title";
import { charactersCarouseIOptions } from "../../../UI/Carousel/media-options";
import { IAnimeCharacter } from "../../../types/jikanMoe/jikan";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

const AnimeCharacters = () => {
   const { animeCharactersLoading, animeCharacters } = useTypedSelector((state) => state.anime);

   return (
      <div className={classes["characters"]}>
         <Title value={"Main Characters"} />
         <div className={classes["characters__rows"]}>
            {animeCharacters.length > 0 && (
               <Carousel
                  options={
                     animeCharacters.length >= 7
                        ? charactersCarouseIOptions
                        : {
                             ...charactersCarouseIOptions,
                             drag: false,
                             arrows: false,
                             autoWidth: true,
                          }
                  }
                  arrowTop={40}
                  arrowSize={"small"}
               >
                  {!animeCharactersLoading ? (
                     animeCharacters.slice(0, 10).map((character, index) => (
                        // <AnimeItem anime={item} key={index} />
                        <CharacterItem character={character} key={index} />
                     ))
                  ) : (
                     <></>
                  )}
               </Carousel>
            )}
            {/* animeCharacters.slice(0, 10).map((character, index) => (
         <PersonItem character={character} key={index} />
       ))} */}
         </div>
      </div>
   );
};

export default AnimeCharacters;
