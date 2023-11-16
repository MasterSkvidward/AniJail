import React, { FC, MouseEvent } from "react";
import { rowType } from "../AnimeCardInfo/AnimeCardInfo";
import classes from "./AnimeCardInfoRow.module.scss";
import { formatGenres } from "../../../helpers/helpers";
import MyLink from "../../../UI/MyLink/MyLink";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import ContentLoader from "react-content-loader";
import { useDispatch } from "react-redux";
import { FilterActionCreators } from "../../../store/reducers/filter/action-creatores";
import { deleteEmptyProperties, getAnimeParamId } from "../../../utils/utils";
import { defaultFilterParams } from "../../../store/reducers/filter/filterReducer";
import { Link } from "react-router-dom";
import Tag from "../../../UI/Tag/Tag";

const AnimeCardInfoRow: FC<rowType> = ({ label, value, type, isLink }) => {
   const dispatch = useDispatch();

   const { animeSingle, animeSingleLoading, animeSingleError } = useTypedSelector((state) => state.anime);
   const { params } = useTypedSelector((state) => state.filter);

   const handleClick = (e: MouseEvent): void => {
      if (!isLink) return;
      let param = {};
      if (typeof value === "string") {
         param = deleteEmptyProperties({ [type]: getAnimeParamId(value, type) });
         dispatch(FilterActionCreators.setParams({ ...defaultFilterParams, ...param }));
      }
   };

   const handleGenreClick = (e: MouseEvent, genre: string): void => {
      e.stopPropagation();
      let param = {};
      param = deleteEmptyProperties({ [type]: getAnimeParamId(genre, type) });
      dispatch(FilterActionCreators.setParams({ ...defaultFilterParams, ...param }));
   };

   return (
      <div className={classes.row}>
         <span className={classes.row__name}>{label}</span>
         {animeSingle ? (
            <div className={classes.row__value} onClick={handleClick}>
               {value ? (
                  typeof value === "string" ? (
                     isLink ? (
                        <MyLink value={value} />
                     ) : (
                        <span>{value}</span>
                     )
                  ) : (
                     <div className={classes["row__value-list"]}>
                        {formatGenres(value)
                           .slice(0, 5)
                           .map((genre, index) => (
                              // <span className={classes.row__genre} key={index} onClick={(e) => handleGenreClick(e, genre)}>
                              <Link to="/anime" onClick={(e) => handleGenreClick(e, genre)} key={index}>{`${genre}`}</Link>
                              // <Tag value={genre} onClick={(e) => handleGenreClick(e, genre)} key={index}/>
                              // </span>
                           ))}
                     </div>
                  )
               ) : (
                  <span>{"-"}</span>
               )}
            </div>
         ) : (
            <ContentLoader
               speed={2}
               className={classes["skeleton"]}
               foregroundColor="var(--background-300)"
               backgroundColor="var(--background-skeleton)"
            >
               <rect x="0" y="0" rx="2" ry="2" width="160" height="20" />
            </ContentLoader>
         )}
      </div>
   );
};

export default AnimeCardInfoRow;
