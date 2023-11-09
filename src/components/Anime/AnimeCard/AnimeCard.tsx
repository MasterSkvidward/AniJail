import React, { FC, useState, useEffect, MouseEvent } from "react";
import classes from "./AnimeCard.module.scss";
import AnimeCardInfo from "../AnimeCardInfo/AnimeCardInfo";
import background_img from "../../../assets/images/onepiece_2560x1440.jpg";

import searchLoupe from "../../../assets/images/search-loupe.png";
import MyModal from "../../../UI/MyModal/MyModal";
import DropMenu from "../../../UI/DropMenu/DropMenu";
import ImageResponsive from "../../../UI/ImageResponsive/ImageResponsive";
import Score from "../../../UI/Score/Score";
import { IAnime } from "../../../types/jikanMoe/jikan";
import { get_average_rgb, splitNumberByThree } from "../../../utils/utils";
import { formatColor } from "../../../helpers/helpers";
import * as CONSTANTS from "./constants";
import MyRating from "../../../UI/MyRating/MyRating";
import { getScoreColor } from "../../../utils/utils";
import { AiFillStar } from "react-icons/ai";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import ContentLoader from "react-content-loader";

import banner from "../../../assets/images/anime-voice.jpg";
// interface AnimeCardProps {
//   anime: IAnime | null;
//   // animePictures: IAnimePicture[] | []
// }

const AnimeCard: FC = () => {
   const [animeColor, setAnimeColor] = useState<string>("");
   const [modalVisible, setModalVisible] = useState(false);
   const [ratingVisible, setRatingVisible] = useState(false);
   const [userRating, setUserRating] = useState<number>(7);

   const { animeSingle: anime, animeSingleLoading, animeSingleError } = useTypedSelector((state) => state.anime);

   const backgroundImgStyle = {
      // background: `linear-gradient(to bottom, transparent 0%, rgba(${animeColor}, 0.9) 92%), url(${background_img}) 0 30% / cover`,
      backgroundImage: `linear-gradient(to bottom, transparent 0%, rgba(0,0,0, 0.55) 100%), url(${banner})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center 30%",
   };

   const getAnimeColor = async () => {
      const color = await get_average_rgb(banner);
      setAnimeColor(formatColor(color.toString()));
   };

   const handlerDocumentClick = (e: Event): void => {
      setRatingVisible(false);
   };

   const handlerRateClick = (e: MouseEvent): void => {
      setRatingVisible(!ratingVisible);
      e.stopPropagation();
   };

   useEffect(() => {
      getAnimeColor();
      document.addEventListener("click", handlerDocumentClick);
      return () => document.removeEventListener("click", handlerDocumentClick);
   }, []);

   //    if (!anime) return <></>;

   return (
      <section className={classes["anime-card"]}>
         <MyModal visible={modalVisible} setVisible={setModalVisible}>
            <ImageResponsive url={anime?.images.jpg.large_image_url || ""} />
         </MyModal>
         <div className={classes["anime-card__header"]}>
            {anime ? (
               <div className={classes["anime-card__background"]} style={backgroundImgStyle}>
                  {/* <img src={background_img} alt="OnePiece" /> */}
               </div>
            ) : (
               <ContentLoader
                  speed={2}
                  className={classes["skeleton__background-image"]}
                  foregroundColor="var(--background-secondary)"
                  backgroundColor="var(--background-skeleton)"
               >
                  <rect x="0" y="0" rx="2" ry="2" width="100%" height="500" />
               </ContentLoader>
            )}
         </div>
         <div className={[classes["anime-card__container"], "_container-main"].join(" ")}>
            <div className={classes["anime-card__main"]}>
               <div className={classes["anime-card__media"]}>
                  {anime ? (
                     <div className={classes["anime-card__image"]} onClick={() => setModalVisible(true)}>
                        <img src={anime?.images.jpg.large_image_url} alt="Anime Preview"></img>
                        <img className={classes["search-loupe"]} src={searchLoupe} alt="loupe"></img>
                     </div>
                  ) : (
                     <ContentLoader
                        speed={2}
                        className={classes["skeleton__image"]}
                        foregroundColor="var(--background-secondary)"
                        backgroundColor="var(--background-skeleton)"
                     >
                        <rect x="0" y="0" rx="2" ry="2" width="500" height="500" />
                     </ContentLoader>
                  )}

                  <div className={classes["anime-card__dropmenu"]}>
                     <DropMenu defaultValue={{ name: "Add to List", accessor: "add" }} options={CONSTANTS.watchCategories} />
                  </div>
               </div>

               <div className={classes["anime-card__body"]}>
                  <AnimeCardInfo anime={anime} />
               </div>

               {anime ? (
                  <div className={classes["anime-card__score"]}>
                     <div className={classes["anime-card__numbers"]}>
                        {anime?.score ? <Score score={anime?.score} /> : <span className={classes["score"]}>No scores</span>}

                        <span className={classes["scoredBy"]}>{`Scored by:   ${splitNumberByThree(
                           anime?.scored_by || 0
                        )}`}</span>
                     </div>

                     <div className={classes["rate"]} onClick={handlerRateClick}>
                        <div className={classes["rate__btn"]}>
                           <span>{userRating ? "Change score" : "Rate"}</span>
                           {userRating !== 0 && (
                              <span className={classes[getScoreColor(userRating || 0)]}>
                                 <AiFillStar />
                                 {userRating}
                              </span>
                           )}
                        </div>
                        {/* <MyButton value='Rate'/> */}
                        <div
                           className={
                              ratingVisible ? [classes["rate__block"], classes["active"]].join(" ") : classes["rate__block"]
                           }
                        >
                           <div className={classes["rate__body"]}>
                              <MyRating
                                 userRating={userRating}
                                 setUserRating={setUserRating}
                                 setRatingVisible={setRatingVisible}
                                 maxWidth={400}
                              />
                           </div>
                        </div>
                     </div>
                  </div>
               ) : (
                  <ContentLoader
                     speed={2}
                     className={classes["skeleton__score"]}
                     foregroundColor="var(--background-secondary)"
                     backgroundColor="var(--background-skeleton)"
                  >
                     <rect x="0" y="0" rx="2" ry="2" width="55" height="36" />
                     <rect x="0" y="42" rx="2" ry="2" width="130" height="14" />
                     <rect x="0" y="92" rx="2" ry="2" width="212" height="39" />
                  </ContentLoader>
               )}
            </div>
         </div>
      </section>
   );
};
export default AnimeCard;
