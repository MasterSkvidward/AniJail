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
import ContentLoader from "react-content-loader";

import { useDispatch } from "react-redux";
import { AnimeActionCreators } from "../../../store/reducers/anime/action-creatores";
import AnimeRecommendations from "../AnimeRecommendations/AnimeRecommendations";

const AnimeDetails = () => {
   const {
      animeRecommendations,
      animeRecommendationsLoading,
      animeRecommendationsError,
      animeSeason,
      animeSingle: anime,
   } = useTypedSelector((state) => state.anime);

   return (
      <section className={classes["anime-details"]}>
         <div className={classes["anime-details__container"] + " " + "_container-main"}>
            <div className={classes["anime-details__main"]}>
               <AnimeCharacters />

               <div className={classes["description"]}>
                  <Title value={"Synopsis"} />
                  {anime ? (
                     <p className={classes["description__body"]}>{anime?.synopsis || "Nothing yet."}</p>
                  ) : (
                     <ContentLoader
                        speed={2}
                        className={classes["skeleton"]}
                        foregroundColor="var(--background-secondary)"
                        backgroundColor="var(--background-skeleton)"
                     >
                        <rect x="0" y="0" rx="2" ry="2" width="500" height="20" />
                        <rect x="0" y="35" rx="2" ry="2" width="500" height="20" />
                        <rect x="0" y="70" rx="2" ry="2" width="500" height="20" />
                     </ContentLoader>
                  )}
               </div>

               <div className={classes["anime-details__rating"]}>
                  <AnimeRating score={anime?.score} scoredBy={anime?.scored_by} />
               </div>

               {/* <div>
                  <iframe
                     src="https://cloud.kodik-storage.com/useruploads/1b2c313a-d7be-4df5-a403-c6f6ac2306d8/ccb9f6289f1ff8483066699beaa06c79"
                     allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                     title="anime"
                     width={700}
                     height={400}
                  ></iframe>
               </div> */}

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
