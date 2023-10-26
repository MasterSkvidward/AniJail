import React, { FC, useEffect, useState, useRef } from "react";
import classes from "./AnimeSort.module.scss";
import MySelect from "../../../UI/MySelect/MySelect";
import AnimeList from "../AnimeList/AnimeList";
import { ISelectOption } from "../../../types/user-inteface";
import * as CONSTANTS from "./constants";
import { useDispatch } from "react-redux";
import { FilterActionCreators } from "../../../store/reducers/filter/action-creatores";
import { IAnimeSearchParams } from "../../../types/jikanMoe/jikan";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import Loader from "../../../UI/Loader/Loader";
import AnimeSidebar from "../AnimeSidebar/AnimeSidebar";
import AnimeFilter from "../AnimeFilter/AnimeFilter";
import useDebounce from "../../../hooks/useDebounce";
import { SetThemeAction } from "../../../store/reducers/global/types";

const AnimeSort = () => {
   const dispatch = useDispatch();
   const { anime, loadNewAnime, params, isLoading, error, hasMoreAnime } = useTypedSelector((state) => state.filter);
   const { animeSeason } = useTypedSelector((state) => state.anime);
   const [page, setPage] = useState<number>(1);
   const [isDebouncing, setIsDebouncing] = useState(false);

   //    const debouncedNewAnime = useDebounce(loadAnime, 300);
   const debouncedAnime = useDebounce(fetchAnime, 500);
   //    const debouncedAnimeNew = useDebounce(fetchNewAnime, 400);

   const lastAnimeRow = useRef<HTMLDivElement | null>(null);
   const observer = useRef<IntersectionObserver | null>(null);

   async function loadAnime() {
      await dispatch(FilterActionCreators.setAnime(params));
      dispatch(FilterActionCreators.setError(""));
   }

   async function fetchNewAnime(loadNewAnime?: boolean) {
      await dispatch(FilterActionCreators.setAnime(params));

      setPage(2);
      //   }
      //   else {
      //      dispatch(FilterActionCreators.setError(""));
      //      debouncedNewAnime(params);
      //   }
   }

   async function fetchAnime() {
      setIsDebouncing(false);
      //   console.log("page - ", page);

      await dispatch(FilterActionCreators.addAnime(params, page));

      if (!error) {
         setPage((prev) => prev + 1);
      } else {
         dispatch(FilterActionCreators.setError(""));
      }
   }

   useEffect(() => {
      if (loadNewAnime) {
         fetchNewAnime(loadNewAnime);
      }
   }, [loadNewAnime]);

   useEffect(() => {
      if (isLoading || page === 1 || error) return;
      if (observer.current) observer.current.disconnect();

      const callback = async (entries: any, observer: IntersectionObserver) => {
         if (entries[0].isIntersecting && hasMoreAnime) {
            setIsDebouncing(true);
            debouncedAnime();
         }
      };

      observer.current = new IntersectionObserver(callback);

      if (lastAnimeRow.current) observer.current.observe(lastAnimeRow.current);
   }, [isLoading, page]);

   //    console.log(`isLoading - ${isLoading} hasMoreAnime - ${hasMoreAnime}  error - ${error} isDebouncing - ${isDebouncing}`);

   return (
      <div className={classes["anime"]}>
         <div className={[classes["anime__container"], "_container-main"].join(" ")}>
            {/* <h2 className={classes["anime__title"]}>{"Catalog"}</h2> */}
            <div className={classes["anime__column"]}>
               <AnimeFilter />
               <div className={classes["anime__row"]}>
                  <MySelect options={CONSTANTS.sortCategories} />
               </div>
               <AnimeList />
               <div ref={lastAnimeRow} className={classes["anime__lastRow"]}>
                  {(isLoading && hasMoreAnime && <Loader />) || (isDebouncing && <Loader />)}
               </div>
            </div>
            {/* <AnimeSidebar anime={animeSeason} /> */}
         </div>
      </div>
   );
};

export default AnimeSort;
