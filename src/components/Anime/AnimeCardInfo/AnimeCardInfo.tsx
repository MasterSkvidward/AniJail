import React, { FC } from "react";
import { IAnimeFull, IAnimeSearchParams, IObjectInfo } from "../../../types/jikanMoe/jikan";

import classes from "./AnimeCardInfo.module.scss";
import AnimeCardInfoRow from "../AnimeCardInfoRow/AnimeCardInfoRow";
import { AiFillMobile } from "react-icons/ai";
import { getAnimeField } from "../../../utils/utils";
import { ISingleAnime } from "../../../types/anime/anime-single";
import { IAnime } from "../../../types/jikanMoe/jikan";
import { IRowObjectInfo } from "../../../types/types";
import ContentLoader from "react-content-loader";
import { filterTypeOptions } from "../AnimeFilter/constants";

interface AnimeCardInfoProps {
   anime: IAnime | null;
}

export type rowType = {
   label: string;
   value: string | IRowObjectInfo[] | [];
   //    sortType?: string | number | undefined;
   isLink: boolean;
   type: string;
   paramId?: string;
};

const AnimeCardInfo: FC<AnimeCardInfoProps> = ({ anime }) => {
   const rows: rowType[] = [
      { label: "Type", value: getAnimeField(anime?.type), type: "type", isLink: true },
      { label: "Genres", value: anime?.genres || [], type: "genres", isLink: true },
      { label: "Episodes", value: getAnimeField(anime?.episodes), type: "episodes", isLink: false },
      { label: "Status", value: getAnimeField(anime?.status), type: "status", isLink: true },

      // {name: 'Season', value: `${getAnimeField(anime?.season)} ${getAnimeField(anime?.year)}`, isLink: true},
      { label: "Season", value: `${getAnimeField(anime?.year)}`, type: "season", isLink: true },
      { label: "Duration", value: getAnimeField(anime?.duration), type: "duration", isLink: false },
      { label: "Age rating", value: getAnimeField(anime?.rating), type: "rating", isLink: true },
      { label: "Studio", value: anime?.studios || [], type: "studios", isLink: true },
      //   { label: "Producers", value: anime?.producers || [], type: "producers",  isLink: true },

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
               foregroundColor="var(--background-300)"
               backgroundColor="var(--background-skeleton)"
            >
               <rect x="0" y="0" rx="2" ry="2" width="300" height="32" />
               <rect x="0" y="44" rx="2" ry="2" width="100" height="13" />
            </ContentLoader>
         )}

         <div className={classes["anime-info__rows"]}>
            {rows.map((row, index) => (
               <AnimeCardInfoRow label={row.label} value={row.value} type={row.type} isLink={row.isLink} key={index} />
            ))}
         </div>
      </div>
   );
};

export default AnimeCardInfo;
