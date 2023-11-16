import React, { FC } from "react";
import { IAnime } from "../../../types/jikanMoe/jikan";
import Image from "../../../UI/Image/Image";
import { useNavigate } from "react-router-dom";
import { formatGenres } from "../../../helpers/helpers";

import classes from "./AnimeItemSmall.module.scss";
import ContentLoader from "react-content-loader";
import Score from "../../../UI/Score/Score";
import Tag from "../../../UI/Tag/Tag";

interface AnimeItemSmallProps {
   anime: IAnime;
}

const AnimeItemSmall: FC<AnimeItemSmallProps> = ({ anime }) => {
   const navigate = useNavigate();

   if (!anime)
      return (
         <ContentLoader
            speed={2}
            className={classes["skeleton__big"]}
            foregroundColor="var(--background-300)"
            backgroundColor="var(--background-skeleton)"
         >
            <rect x="0" y="0" rx="2" ry="2" width="342" height="548" />
         </ContentLoader>
      );

   return (
      <div className={classes["anime"]} onClick={() => navigate(`/anime/${anime.mal_id}`)}>
         <div className={classes["image"]}>
            <img src={anime.images.jpg.image_url} alt={anime.title_english} />
         </div>
         <div className={classes["body"]}>
            <div className={classes["body__title"]}>
               <h5 className={classes["body__title_en"]}>{anime?.title_english ? anime.title_english : anime?.title}</h5>
               <h5 className={classes["body__title_jp"]}>{anime?.title_japanese}</h5>
            </div>

            <div className={classes["body__type"]}>{anime.year ? `${anime.type}, ${anime.year}` : anime.type}</div>

            <div className={classes["body__info"]}>
               <Score score={anime?.score || 0} />
               <div className={classes["body__genres"]}>
                  {formatGenres(anime?.genres)
                     .splice(0, 3)
                     .map((genre, index) => (
                        <Tag value={genre} onClick={(e) => {e.stopPropagation()}} key={index}/>
                        // <div className={classes["body__genre"]} key={index}>
                        //    {genre}
                        // </div>
                     ))}
               </div>
            </div>
         </div>
      </div>
   );
};

export default AnimeItemSmall;
