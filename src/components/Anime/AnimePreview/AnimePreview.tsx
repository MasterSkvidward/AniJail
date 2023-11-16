import React, { FC } from "react";
import { ISingleAnime } from "../../../types/anime/anime-single";
import classes from "./AnimePreview.module.scss";
import AnimeCardInfo from "../AnimeCardInfo/AnimeCardInfo";
import { IAnime, IAnimeFull } from "../../../types/jikanMoe/jikan";
import { getShortenedString } from "../../../utils/utils";
import Loader from "../../../UI/Loader/Loader";
import Tag from "../../../UI/Tag/Tag";
import Score from "../../../UI/Score/Score";
import DropMenu from "../../../UI/DropMenu/DropMenu";
import { watchCategories } from "../AnimeCard/constants";

interface AnimePreviewProps {
   anime: IAnime;
}

const AnimePreview: FC<AnimePreviewProps> = ({ anime }) => {
   return (
      <div className={classes["preview"]} onClick={(e) => e.stopPropagation()}>
         {!anime ? (
            <Loader />
         ) : (
            <>
               {/* <AnimeCardInfo anime={anime} /> */}
               <div className={classes["preview__row"]}>
                  <p className={classes["preview__season"]}>Fall 2023</p>
                  <Score score={anime.score} />
               </div>

               <div className={classes["preview__info"]}>
                  <p className={classes["preview__type"]}>{anime.type || "-"}</p>
                  <span className={classes["preview__studio"]}>{anime?.studios[0]?.name || ""}</span>
               </div>
               <div className={classes["preview__genres"]}>
                  {anime.genres.slice(0, 2).map((item, index) => (
                     <Tag value={item.name} onClick={() => {}} />
                  ))}
               </div>
               {/* <div className={classes["preview__folders"]}>
                  <DropMenu defaultValue={{ name: "Add to List", accessor: "add" }} options={watchCategories} />
               </div> */}
            </>
         )}
      </div>
   );
};

export default AnimePreview;
