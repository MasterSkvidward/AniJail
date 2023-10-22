import React, { FC } from "react";
import classes from "./AnimeItemPreview.module.scss";
import { getShortenedString } from "../../../utils/utils";
import { useNavigate } from "react-router-dom";
import Image from "../../../UI/Image/Image";
import { IAnimeRecommendation } from "../../../types/jikanMoe/jikan";
import ContentLoader from "react-content-loader";

interface AnimeItemPreviewProps {
   anime: IAnimeRecommendation | null;
}

const AnimeItemPreview: FC<AnimeItemPreviewProps> = ({ anime }) => {
   const navigate = useNavigate();

   const handleClick = (id: number) => {
      navigate(`/anime/${id}`);
   };

   if (!anime)
      return (
         <ContentLoader
            speed={2}
            className={classes["skeleton"]}
            foregroundColor="var(--background-secondary)"
            backgroundColor="var(--background-skeleton)"
         >
            <rect x="0" y="0" rx="2" ry="2" width="177" height="282" />
            <rect x="0" y="292" rx="2" ry="2" width="177" height="20" />
         </ContentLoader>
      );

   return (
      <div className={classes["anime__body"]} onClick={() => handleClick(anime.entry.mal_id)}>
         <div className={classes["anime__image"]}>
            <Image url={anime?.entry?.images.jpg.image_url || ""} />
         </div>
         <h4 className={classes["anime__title"]}>{getShortenedString(anime?.entry?.title, 37)}</h4>
         {/* <AnimePreview anime={anime}/> */}
      </div>
   );
};

export default AnimeItemPreview;
