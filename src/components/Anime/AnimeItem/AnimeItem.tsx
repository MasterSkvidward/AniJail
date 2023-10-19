import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import useDebounce from "../../../hooks/useDebounce";

import classes from "./AnimeItem.module.scss";
import { ISingleAnime } from "../../../types/anime/anime-single";
import { IAnime, IAnimeFull } from "../../../types/jikanMoe/jikan";
import Image from "../../../UI/Image/Image";
import ImageZoom from "../../../UI/ImageZoom/ImageZoom";
import { publicRoutes } from "../../AppRouter/routes";
import { getShortenedString } from "../../../utils/utils";
import AnimePreview from "../AnimePreview/AnimePreview";
import ContentLoader from "react-content-loader";

interface AnimeItemProps {
   anime: IAnime | null;
   showPreview?: boolean;
}

const AnimeItem: FC<AnimeItemProps> = ({ anime, showPreview = false }) => {
   const navigate = useNavigate();
   const [previewVisible, setPreviewVisible] = useState<boolean>(false);
   const [duration, setDuration] = useState(500);
   const debounceShow = useDebounce(showAnimePreview, duration);

   function showAnimePreview(flag: boolean) {
      setPreviewVisible(flag);
   }

   const handlerMouseEnter = () => {
      debounceShow(true);
      setDuration(100);
   };

   const handlerMouseLeave = () => {
      debounceShow(false);
      setDuration(800);
   };

   // const propsStyles = {
   //     width: `${width}px`,
   //     maxWidth: `${maxWidth}px`,
   //     minWidth: `${minWidth}px`,
   //     height: `${height}px`,
   //     maxHeight: `${maxHeight}px`,
   // }

   if (!anime)
      return (
         <ContentLoader
            speed={2}
            className={classes["skeleton"]}
            foregroundColor="var(--background-secondary)"
            backgroundColor="var(--background-skeleton)"
         >
            <rect x="0" rx="2" ry="2" width="500" height="500" />
         </ContentLoader>
      );

   return (
      <div
         className={classes["anime"]}
         onClick={() => navigate(`/anime/${anime?.mal_id}`)}
         onMouseEnter={handlerMouseEnter}
         onMouseLeave={handlerMouseLeave}
      >
         {showPreview && (
            <div
               className={
                  previewVisible
                     ? [classes["anime__preview"], classes["preview-visible"]].join(" ")
                     : classes["anime__preview"]
               }
            >
               <AnimePreview anime={anime} />
            </div>
         )}
         <div className={classes["anime__body"]}>
            <div className={classes["anime__image"]}>
               <Image url={anime?.images.jpg.large_image_url || ""} score={anime.score} />
            </div>
            <div className={classes["anime__content"]}>
               <h4 className={classes["anime__title"]}>
                  {getShortenedString(anime?.title_english ? anime.title_english : anime?.title, 35)}
               </h4>
               {/* <p className={classes["anime__info"]}>
                  <span>{anime.type}</span><span>{anime.status}</span>{" "}
               </p> */}
            </div>

            {/* <AnimePreview anime={anime}/> */}
         </div>
      </div>
   );
};

export default AnimeItem;
