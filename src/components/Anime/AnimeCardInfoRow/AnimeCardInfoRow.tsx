import React, { FC } from "react";
import { rowType } from "../AnimeCardInfo/AnimeCardInfo";
import classes from "./AnimeCardInfoRow.module.scss";
import { formatGenres } from "../../../helpers/helpers";
import MyLink from "../../../UI/MyLink/MyLink";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import ContentLoader from "react-content-loader";

const AnimeCardInfoRow: FC<rowType> = ({ name, value, sortType, isLink }) => {
   const linkNames: string[] = [""];

   const { animeSingle, animeSingleLoading, animeSingleError } = useTypedSelector((state) => state.anime);

   return (
      <div className={classes.row}>
         <span className={classes.row__name}>{name}</span>
         {animeSingle ? (
            <div className={classes.row__value}>
               {value ? (
                  typeof value === "string" ? (
                     isLink ? (
                        <MyLink sortType={sortType}>{value}</MyLink>
                     ) : (
                        <span>{value}</span>
                     )
                  ) : (
                     formatGenres(value).map((genre, index) => (
                        <div className={classes.row__genre} key={index}>
                           <MyLink sortType={sortType}>{genre}</MyLink>
                        </div>
                     ))
                  )
               ) : (
                  <span>{"-"}</span>
               )}
            </div>
         ) : (
            <ContentLoader
               speed={2}
               className={classes["skeleton"]}
               foregroundColor="var(--background-secondary)"
               backgroundColor="var(--background-skeleton)"
            >
               <rect x="0" y="0" rx="2" ry="2" width="160" height="20" />
            </ContentLoader>
         )}
      </div>
   );
};

export default AnimeCardInfoRow;
