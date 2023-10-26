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
import AnimePlayer from "../AnimePlayer/AnimePlayer";
import { getAnimeEpisodeUrl } from "../../../utils/utils";
import { useDispatch } from "react-redux";
import { AnimeActionCreators } from "../../../store/reducers/anime/action-creatores";

const AnimeDetails = () => {
   const {
      animeRecommendations,
      animeRecommendationsLoading,
      animeRecommendationsError,
      animeSeason,
      animeSingle: anime,
   } = useTypedSelector((state) => state.anime);

   const dispatch = useDispatch();

   const api_url = "https://api.consumet.org/anime/gogoanime/watch/";

   const fetchAnimeEpisode = async (title: string) => {
      const url = getAnimeEpisodeUrl(api_url, title, 1);
      await dispatch(AnimeActionCreators.GetAnimeEpisode(url));
   };

   useEffect(() => {
      if (anime) {
         console.log(anime);

         fetchAnimeEpisode(anime.title || anime?.title_english);
      }
   }, [anime]);

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

               {(animeRecommendations.length || animeRecommendationsLoading || animeRecommendationsError) && (
                  <div className={classes["carousel"]}>
                     <Title value={"You may also like"} />
                     <Carousel options={smallLimitedCarouseIOptions} arrowTop={40}>
                        {animeRecommendations.length
                           ? animeRecommendations.map((item, index) => (
                                // <AnimeItem anime={item} key={index} />
                                <AnimeItemPreview anime={item} key={index} />
                             ))
                           : [...new Array(24)].map((item, index) => <AnimeItemPreview anime={null} key={index} />)}
                     </Carousel>
                  </div>
               )}

               <AnimePlayer />

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
