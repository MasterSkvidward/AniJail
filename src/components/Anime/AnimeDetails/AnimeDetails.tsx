import React, { FC, useState, useEffect } from "react";

import classes from "./AnimeDetails.module.scss";
import Title from "../../../UI/Title/Title";
import Carousel from "../../../UI/Carousel/Carousel";
import { smallLimitedCarouseIOptions } from "../../../UI/Carousel/media-options";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import AnimeItemPreview from "../AnimeItemPreview/AnimeItemPreview";

import AnimeCharacters from "../AnimeCharacters/AnimeCharacters";
import AnimeSidebar from "../AnimeSidebar/AnimeSidebar";
import AnimeRating from "../AnimeRating/AnimeRating";

const AnimeDetails = () => {
   const { animeRecommendations, animeSeason, animeSingle: anime } = useTypedSelector((state) => state.anime);

   return (
      <section className={classes["anime-details"]}>
         <div className={classes["anime-details__container"] + " " + "_container1800"}>
            <div className={classes["anime-details__main"]}>
               <AnimeCharacters />

               <div className={classes["description"]}>
                  <Title value={"Synopsis"} />
                  <p className={classes["description__body"]}>{anime?.synopsis || "Nothing yet."}</p>
               </div>

               <div className={classes["anime-details__rating"]}>
                  <AnimeRating score={anime?.score} scoredBy={anime?.scored_by} />
               </div>

               {/* <div className={classes["trailer"]}>
            <Title value={"Trailer"} />
            <div className={classes["trailer__video"]}>
              <iframe
                src={`${anime?.trailer.embed_url}?mute=1`}
                width="397"
                height="345"
                title="YouTube video player"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div> */}

               {animeRecommendations.length > 5 && (
                  <div className={classes["carousel"]}>
                     <Title value={"You may also like"} />
                     <Carousel options={smallLimitedCarouseIOptions} arrowTop={40}>
                        {animeRecommendations.map((item, index) => (
                           // <AnimeItem anime={item} key={index} />
                           <AnimeItemPreview anime={item} key={index} />
                        ))}
                     </Carousel>
                  </div>
               )}

               {/* {animeCurrentSeason.length > 5 && 
            <div className={classes["carousel"]}>
              <Title value={"Trending now"} />
              <Carousel options={smallLimitedCarouseIOptions} arrowTop={40}>
                {animeCurrentSeason.map((item, index) => (
                  // <AnimeItem anime={item} key={index} />
                  <AnimeItem anime={item} key={index} />
                ))}
              </Carousel>
            </div>
        } */}
            </div>

            <AnimeSidebar anime={animeSeason} />
         </div>
      </section>
   );
};

export default AnimeDetails;
