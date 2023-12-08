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

import aot_img from "../../../assets/images/aot-promo.jpg";
import CategoriesOverview, { ICategory } from "../../../UI/CategoriesOverview/CategoriesOverview";

const AnimeDetails = () => {
   const {
      animeRecommendations,
      animeRecommendationsLoading,
      animeRecommendationsError,
      animeSeason,
      animeSingle: anime,
   } = useTypedSelector((state) => state.anime);

   const backendCategories: ICategory[] = [
      { label: "Completed", amount: 20250 },
      { label: "Planned", amount: 13060 },
      { label: "Watching", amount: 962 },
      { label: "Favourite", amount: 4025 },
      { label: "Dropped", amount: 1675 },
   ];

   return (
      <section className={classes["anime-details"]}>
         <div className={classes["anime-details__container"] + " " + "_container-main"}>
            <div className={classes["anime-details__main"]}>
               <div className={classes["description"]}>
                  <Title value={"Synopsis"} />
                  {anime ? (
                     <p className={classes["description__body"]}>{anime?.synopsis || "Nothing yet."}</p>
                  ) : (
                     <ContentLoader
                        speed={2}
                        className={classes["skeleton"]}
                        foregroundColor="var(--background-300)"
                        backgroundColor="var(--background-skeleton)"
                     >
                        <rect x="0" y="0" rx="2" ry="2" width="500" height="20" />
                        <rect x="0" y="35" rx="2" ry="2" width="500" height="20" />
                        <rect x="0" y="70" rx="2" ry="2" width="500" height="20" />
                     </ContentLoader>
                  )}
               </div>

               <div className={classes["anime-details__characters"]}>
                  <AnimeCharacters />
               </div>

               <div className={classes["anime-details__row"]}>
                  {/* <AnimeRating score={anime?.score} scoredBy={anime?.scored_by} /> */}
                  <div className={classes["trailer"]}>
                     <Title value={"Trailer"} />

                     <div className={classes["trailer__video"]}>
                        {anime?.trailer.embed_url ? (
                           <iframe
                              src={`${anime?.trailer.embed_url || ""}?poster=${aot_img}`}
                              name="trailer"
                              width="397"
                              height="245"
                              title="YouTube video player"
                              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowFullScreen
                           ></iframe>
                        ) : (
                           <div className={classes["trailer__error"]}>
                              <span>Trailer is not available</span>
                           </div>
                        )}
                     </div>
                  </div>
                  <div className={classes["statistics"]}>
                     <div className={classes["statistics__folders"]}>
                        <Title value={"Statistics"} />
                        <CategoriesOverview categories={backendCategories} />
                     </div>{" "}
                     <div className={classes["statistics__folders"]}>
                        {/* <Title value={"Status Destribution"} /> */}
                        <CategoriesOverview categories={backendCategories} />
                     </div>
                  </div>
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
