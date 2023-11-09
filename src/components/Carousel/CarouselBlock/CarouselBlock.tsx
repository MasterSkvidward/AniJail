import React, { useState, useEffect } from "react";
import { IAnime } from "../../../types/jikanMoe/jikan";
import { AnimeService } from "../../../services/AnimeService";
import classes from "./CarouselBlock.module.scss";
import CarouselBlockItem from "../CarouselBlockItem/CarouselBlockItem";
import { bigCarouselOptions, smallCarouselOptions } from "../../../UI/Carousel/media-options";
import { getCurrentSeasonName } from "../../../utils/utils";
import AnimeItem from "../../Anime/AnimeItem/AnimeItem";
import AnimeItemBig from "../../Anime/AnimeItemBig/AnimeItemBig";
import ContentLoader from "react-content-loader";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { join } from "path";

const CarouselBlock = () => {
   const { animeSeason: animeCurrentSeason } = useTypedSelector((state) => state.anime);

   //   const fetchAnime = async () => {
   //     // const seasonAnime = await AnimeService.getAnimeSeasonNow();
   //     // const popularAnime = await AnimeService.getAnimeSeasonNow();
   //     // const dateAnime = await AnimeService.getAnimeSeasonNow();
   //   };

   const carousels = [
      {
         title: `Anime for you`,
         options: smallCarouselOptions,
         arrowTop: 40,
         data: animeCurrentSeason,
      },
      {
         title: `Popular`,
         options: { ...smallCarouselOptions, interval: 12000 },
         arrowTop: 40,
         data: animeCurrentSeason,
      },
      //   {
      //      title: `A-Z`,
      //      options: { ...smallCarouselOptions, interval: 9000 },
      //      arrowTop: 40,
      //      data: animeCurrentSeason,
      //   },
   ];

   useEffect(() => {
      // fetchAnime();
   }, []);

   return (
      <section className={classes["carousel-block"]}>
         <div className={[classes["carousel-block__container"], "_container-big"].join(" ")}>
            <div className={classes["carousel-item__big"]}>
               <div>
                  <CarouselBlockItem
                     title={`${getCurrentSeasonName()} season`}
                     options={bigCarouselOptions}
                     arrowTop={48}
                     arrowSize={"big"}
                  >
                     {animeCurrentSeason.length !== 0
                        ? animeCurrentSeason.map((item, index) => <AnimeItemBig anime={item} key={index} />)
                        : [...new Array(5)].map((item, index) => (
                             <ContentLoader
                                key={index}
                                speed={2}
                                className={classes["skeleton__big"]}
                                foregroundColor="var(--background-secondary)"
                                backgroundColor="var(--background-skeleton)"
                             >
                                <rect x="0" y="0" rx="2" ry="2" width="342" height="548" />
                             </ContentLoader>
                          ))}
                  </CarouselBlockItem>
               </div>
            </div>
            <div>
               <div className={classes["carousel-block__body"]}>
                  <>
                     {carousels.map((carousel, index) => (
                        <CarouselBlockItem
                           title={carousel.title}
                           options={carousel.options}
                           arrowTop={carousel.arrowTop}
                           key={index}
                        >
                           {carousel.data.length !== 0
                              ? carousel.data.map((item, index) => <AnimeItem anime={item} key={index} />)
                              : [...new Array(9)].map((item, index) => (
                                   <ContentLoader
                                      key={index}
                                      speed={2}
                                      className={classes["skeleton__small"]}
                                      foregroundColor="var(--background-secondary)"
                                      backgroundColor="var(--background-skeleton)"
                                   >
                                      <rect x="0" y="0" rx="2" ry="2" width="182" height="270" />
                                      <rect x="0" y="282" rx="2" ry="2" width="182" height="30" />
                                   </ContentLoader>
                                ))}
                        </CarouselBlockItem>
                     ))}
                  </>
               </div>
            </div>
         </div>
      </section>
   );
};

export default CarouselBlock;
