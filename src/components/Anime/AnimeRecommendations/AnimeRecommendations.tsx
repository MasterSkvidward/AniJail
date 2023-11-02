import React from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import classes from "./AnimeRecommendations.module.scss";
import Carousel from "../../../UI/Carousel/Carousel";
import Title from "../../../UI/Title/Title";
import AnimeItemPreview from "../AnimeItemPreview/AnimeItemPreview";
import { smallLimitedCarouseIOptions } from "../../../UI/Carousel/media-options";
import { limitedOptions } from "../../../UI/Carousel/media-options";

const AnimeRecommendations = () => {
   const { animeRecommendations, animeRecommendationsLoading, animeRecommendationsError } = useTypedSelector(
      (state) => state.anime
   );

   return (
      <div className={classes["recommendations"]}>
         {(animeRecommendations.length || animeRecommendationsLoading || animeRecommendationsError) && (
            <div className={classes["carousel"]}>
               <Title value={"You may also like"} />
               <Carousel
                  options={
                     animeRecommendations.length >= 7 && !animeRecommendationsLoading && !animeRecommendationsError
                        ? smallLimitedCarouseIOptions
                        : {
                             ...smallLimitedCarouseIOptions,
                             ...limitedOptions,
                          }
                  }
                  arrowTop={40}
               >
                  {animeRecommendations.length
                     ? animeRecommendations.map((item, index) => (
                          // <AnimeItem anime={item} key={index} />
                          <AnimeItemPreview anime={item} key={index} />
                       ))
                     : [...new Array(24)].map((item, index) => <AnimeItemPreview anime={null} key={index} />)}
               </Carousel>
            </div>
         )}
      </div>
   );
};

export default AnimeRecommendations;
