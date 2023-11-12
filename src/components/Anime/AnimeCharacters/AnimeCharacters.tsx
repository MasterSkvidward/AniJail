import React, { FC } from "react";

import classes from "./AnimeCharacters.module.scss";
import Carousel from "../../../UI/Carousel/Carousel";
import CharacterItem from "../../CharacterItem/CharacterItem";
import Title from "../../../UI/Title/Title";
import { charactersCarouseIOptions, limitedOptions } from "../../../UI/Carousel/media-options";
import { IAnimeCharacter } from "../../../types/jikanMoe/jikan";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import ContentLoader from "react-content-loader";

const AnimeCharacters = () => {
   const { animeCharactersLoading, animeCharacters, animeCharactersError, animeSingleLoading, animeSearchLoading } =
      useTypedSelector((state) => state.anime);

   //    console.log(animeCharacters.length, animeCharactersLoading, animeCharactersError, animeSingleLoading, animeSearchLoading);

   //    if (animeCharacters.length === 0 && !animeCharactersLoading && !animeCharactersError && !animeSingleLoading && !animeSearchLoading) return <></>;
   //    console.log("rendered");

   if (!animeCharacters) return <></>;

   return (
      <div className={classes["characters"]}>
         <Title value={"Main Characters"} />
         <div className={classes["characters__rows"]}>
            <Carousel
               options={
                  animeCharacters.length >= 7 && !animeCharactersLoading && !animeCharactersError
                     ? charactersCarouseIOptions
                     : {
                          ...charactersCarouseIOptions,
                          ...limitedOptions,
                       }
               }
               arrowTop={40}
               arrowSize={"small"}
            >
               {animeCharacters.length > 0
                  ? animeCharacters.slice(0, 10).map((character, index) => (
                       // <AnimeItem anime={item} key={index} />
                       <CharacterItem character={character} key={index} />
                    ))
                  : [...new Array(7)].map((item, index) => (
                       <ContentLoader
                          key={index}
                          speed={2}
                          className={classes["skeleton"]}
                          foregroundColor="var(--background-300)"
                          backgroundColor="var(--background-skeleton)"
                       >
                          <rect x="0" y="0" rx="2" ry="2" width="121" height="188" />
                          <rect x="0" y="198" rx="2" ry="2" width="121" height="16" />
                       </ContentLoader>
                    ))}
            </Carousel>
            {/* animeCharacters.slice(0, 10).map((character, index) => (
         <PersonItem character={character} key={index} />
       ))} */}
         </div>
      </div>
   );
};

export default AnimeCharacters;
