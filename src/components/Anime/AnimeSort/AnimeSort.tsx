import React, { FC, useEffect, useState, useRef } from "react";
import classes from "./AnimeSort.module.scss";
import MySelect from "../../../UI/MySelect/MySelect";
import AnimeList from "../AnimeList/AnimeList";
import Filter from "../../../UI/Filter/Filter";
import { ISelectOption } from "../../../types/user-inteface";
import * as CONSTANTS from "./constants";
import { useDispatch } from "react-redux";
import { FilterActionCreators } from "../../../store/reducers/filter/action-creatores";
import { IAnimeSearchParams } from "../../../types/jikanMoe/jikan";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import Loader from "../../../UI/Loader/Loader";

const AnimeSort = () => {
   const dispatch = useDispatch();
   const { loadNewAnime, params, isLoading, hasMoreAnime } = useTypedSelector((state) => state.filter);
   const [page, setPage] = useState<number>(2);

   const lastAnimeRow = useRef<HTMLDivElement | null>(null);
   const observer = useRef<IntersectionObserver | null>(null);

   useEffect(() => {
      if (loadNewAnime) {
         dispatch(FilterActionCreators.setAnime(params));
         setPage(2);
      }
   }, [loadNewAnime]);

   useEffect(() => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();

      const callback = (entries: any, observer: IntersectionObserver) => {
         if (entries[0].isIntersecting && hasMoreAnime) {
            dispatch(FilterActionCreators.addAnime(params, page));
            setPage(page + 1);
         }
      };

      observer.current = new IntersectionObserver(callback);

      if (lastAnimeRow.current) observer.current.observe(lastAnimeRow.current);
   }, [isLoading]);

   return (
      <div className={classes["anime"]}>
         <div className={[classes["anime__container"], "_container1800"].join(" ")}>
            <h2 className={classes["anime__title"]}>{"Catalog"}</h2>
            <div className={classes["anime__block"]}>
               <div className={classes["anime__column"]}>
                  <div className={classes["anime__row"]}>
                     <MySelect options={CONSTANTS.sortCategories} />
                  </div>
                  <AnimeList />
                  <div ref={lastAnimeRow} className={classes["anime__lastRow"]}>
                     {isLoading && hasMoreAnime && <Loader />}
                  </div>
               </div>
               <div className={classes["anime__filter"]}>
                  <Filter />
               </div>
            </div>
         </div>
      </div>
   );
};

export default AnimeSort;
