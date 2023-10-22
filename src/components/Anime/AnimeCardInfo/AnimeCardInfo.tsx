import React, { FC } from "react";
import { IAnimeFull, IObjectInfo } from "../../../types/jikanMoe/jikan";

import classes from "./AnimeCardInfo.module.scss";
import AnimeCardInfoRow from "../AnimeCardInfoRow/AnimeCardInfoRow";
import { AiFillMobile } from "react-icons/ai";
import { getAnimeField } from "../../../utils/utils";
import { ISingleAnime } from "../../../types/anime/anime-single";
import { IAnime } from "../../../types/jikanMoe/jikan";
import { IRowObjectInfo } from "../../../types/types";
import ContentLoader from "react-content-loader";

interface AnimeCardInfoProps {
   anime: IAnime | null;
}

export type rowType = {
   name: string;
   value: string | IRowObjectInfo[] | [];
   sortType?: string | number | undefined;
   isLink: boolean;
};

const AnimeCardInfo: FC<AnimeCardInfoProps> = ({ anime }) => {
   const rows: rowType[] = [
      {
         name: "Type",
         value: getAnimeField(anime?.type),
         sortType: anime?.type,
         isLink: false,
      },
      {name: 'Genres', value: anime?.genres || [], isLink: true},
      { name: "Status", value: getAnimeField(anime?.status), isLink: true },
      { name: "Episodes", value: getAnimeField(anime?.episodes), isLink: false },
      // {name: 'Season', value: `${getAnimeField(anime?.season)} ${getAnimeField(anime?.year)}`, isLink: true},
      { name: "Season", value: `${getAnimeField(anime?.year)}`, isLink: true },
      { name: "Duration", value: getAnimeField(anime?.duration), isLink: false },
    //   { name: "Duration", value: getAnimeField(anime?.duration), isLink: false },
   ];

   return (
      <div className={classes["anime-info"]}>
         {anime ? (
            <div className={classes["anime-info__title"]}>
               <h2 className={classes["anime-info__title_en"]}>
                  {anime?.title_english ? anime.title_english : anime?.title}
               </h2>
               <h4 className={classes["anime-info__title_jp"]}>{anime?.title_japanese}</h4>
            </div>
         ) : (
            <ContentLoader
               speed={2}
               className={classes["skeleton"]}
               foregroundColor="var(--background-secondary)"
               backgroundColor="var(--background-skeleton)"
            >
               <rect x="0" y="0" rx="2" ry="2" width="300" height="32" />
               <rect x="0" y="44" rx="2" ry="2" width="100" height="13" />
            </ContentLoader>
         )}

         <div className={classes["anime-info__rows"]}>
            {rows.map((row, index) => (
               <AnimeCardInfoRow name={row.name} value={row.value} sortType={row.sortType} isLink={row.isLink} key={index} />
            ))}
         </div>
      </div>
   );
};

export default AnimeCardInfo;
