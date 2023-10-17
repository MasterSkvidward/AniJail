import React, { FC, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import classes from "./AnimeDetails.module.scss";
import { IAnimeFull, IAnimeRecommendation } from "../../../types/jikanMoe/jikan";
import Title from "../../../UI/Title/Title";
import { AnimeService } from "../../../services/AnimeService";
import { IAnimePicture } from "../../../types/jikanMoe/jikan";
import Image from "../../../UI/Image/Image";
import { ISingleAnime } from "../../../types/anime/anime-single";
import Carousel from "../../../UI/Carousel/Carousel";
import { smallLimitedCarouseIOptions, charactersCarouseIOptions } from "../../../UI/Carousel/media-options";
import { IAnime } from "../../../types/jikanMoe/jikan";
import AnimeItem from "../AnimeItem/AnimeItem";
import Sidebar from "../../../UI/Sidebar/Sidebar";
import AnimeItemSmall from "../AnimeItemSmall/AnimeItemSmall";
import { getShortenedString, splitNumberByThree } from "../../../utils/utils";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { publicRoutes } from "../../AppRouter/routes";
import AnimeItemPreview from "../AnimeItemPreview/AnimeItemPreview";
import ContentLoader from "react-content-loader";
import PersonItem from "../../PersonItem/PersonItem";
import MyRating from "../../../UI/MyRating/MyRating";
import Score from "../../../UI/Score/Score";
import { BsFillPencilFill } from "react-icons/bs";

const AnimeDetails = () => {
   const {
      animeRecommendations,
      animeCharacters,
      animeSeason: animeCurrentSeason,
      animeSingle: anime,
   } = useTypedSelector((state) => state.anime);

   const [userRating, setUserRating] = useState<number>(7);

   //   useEffect(() => {
   //   }, []);

   return (
      <section className={classes["anime-details"]}>
         <div className={classes["anime-details__container"] + " " + "_container1800"}>
            <div className={classes["anime-details__main"]}>
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
                           {animeCharacters.slice(0, 10).map((character, index) => (
                              // <AnimeItem anime={item} key={index} />
                              <PersonItem
                                 src={character.character.images.jpg.image_url}
                                 name={character.character.name}
                                 key={index}
                              />
                           ))}
                        </Carousel>
                     )}
                     {/* animeCharacters.slice(0, 10).map((character, index) => (
                   <PersonItem character={character} key={index} />
                 ))} */}
                  </div>
               </div>

               <div className={classes["description"]}>
                  <Title value={"Synopsis"} />
                  <p className={classes["description__body"]}>{anime?.synopsis || "Nothing yet."}</p>
               </div>

               <div className={classes["rating"]}>
                  <Title value={"Rating"} />
                  <div className={classes["rating__row"]}>
                     <div className={classes["rating__rate"]}>
                        <MyRating
                           userRating={userRating}
                           setUserRating={setUserRating}
                           maxWidth={400}
                           items={10}
                           showUserRating={true}
                        />
                     </div>
                     <div className={classes["rating__column"]}>
                        {anime?.score ? <Score score={anime?.score} /> : <span>No scores</span>}

                        <span className={classes["rating__scored-by"]}>{`Scored by: ${splitNumberByThree(
                           anime?.scored_by || 0
                        )}`}</span>
                     </div>
                  </div>
                  <button className={classes["rating__review"]}>
                     <BsFillPencilFill />
                     <span>Write review</span>
                  </button>
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

            <div className={classes["anime-details__sidebar"]}>
               <Title value="Airing Now" />
               <Sidebar>
                  {animeCurrentSeason.length !== 0
                     ? animeCurrentSeason.slice(0, 8).map((anime, index) => <AnimeItemSmall anime={anime} key={index} />)
                     : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
                          <ContentLoader
                             key={index}
                             speed={2}
                             className={classes["skeleton__item-small"]}
                             foregroundColor="var(--background-secondary)"
                             backgroundColor="var(--background-skeleton)"
                          >
                             <rect x="0" y="0" rx="2" ry="2" width="466" height="139" />
                          </ContentLoader>
                       ))}
               </Sidebar>
            </div>
         </div>
      </section>
   );
};

export default AnimeDetails;
