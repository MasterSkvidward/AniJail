import React, { FC } from "react";
import classes from "./AnimeItemPreview.module.scss";
import { getShortenedString } from "../../../utils/utils";
import { useNavigate } from "react-router-dom";
import Image from "../../../UI/Image/Image";
import { IAnimeRecommendation } from "../../../types/jikanMoe/jikan";

interface AnimeItemPreviewProps {
   anime: IAnimeRecommendation;
}

const AnimeItemPreview: FC<AnimeItemPreviewProps> = ({ anime }) => {
   const navigate = useNavigate();

   const handleClick = (id: number) => {
      navigate(`/anime/${id}`);
   };

   return (
      <div className={classes["anime__body"]} onClick={() => handleClick(anime.entry.mal_id)}>
         <div className={classes["anime__image"]}>
            <Image url={anime.entry?.images.jpg.image_url || ""} />
         </div>
         <h4 className={classes["anime__title"]}>{getShortenedString(anime.entry?.title, 37)}</h4>
         {/* <AnimePreview anime={anime}/> */}
      </div>
   );
};

export default AnimeItemPreview;
