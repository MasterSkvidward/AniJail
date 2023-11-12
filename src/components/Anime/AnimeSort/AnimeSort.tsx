import React, { FC, useEffect, useState, useRef, MouseEvent } from "react";
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
import { Navigate, useNavigate } from "react-router-dom";
import { FaList } from "react-icons/fa";
import { BsGrid3X3GapFill } from "react-icons/bs";
import Tag from "../../../UI/Tag/Tag";
import { IoIosPricetags } from "react-icons/io";
import { filterGenreOptions } from "../AnimeFilter/constants";
import { filterAgeOptions, filterStatusOptions, filterTypeOptions } from "../../Profile/ProfileFilter/constants";
import { deleteEmptyProperties } from "../../../utils/utils";
import { defaultFilterParams } from "../../../store/reducers/filter/filterReducer";

interface ITagObject {
   key: string;
   value: string;
   label: string;
}

const AnimeSort = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const [currentView, setCurrentView] = useState<string>("grid");
   const { anime, loadNewAnime, params, isLoading, error, hasMoreAnime } = useTypedSelector((state) => state.filter);
   const { animeSeason } = useTypedSelector((state) => state.anime);
   //    const [page, setPage] = useState<number>(params.page || 1);
   const [isDebouncing, setIsDebouncing] = useState(false);

   //    const debouncedNewAnime = useDebounce(loadAnime, 300);
   const debouncedAnime = useDebounce(fetchAnime, 500);
   //    const debouncedAnimeNew = useDebounce(fetchNewAnime, 400);

   const lastAnimeRow = useRef<HTMLDivElement | null>(null);
   const observer = useRef<IntersectionObserver | null>(null);

   const icons = [
      { icon: <FaList />, accessor: "column" },
      { icon: <BsGrid3X3GapFill />, accessor: "grid" },
   ];

   const handleClick = (e: MouseEvent, accessor: string): void => {
      setCurrentView(accessor);
   };

   const handleClickTag = (e: MouseEvent, tag: ITagObject): void => {
      let newValue = params[tag.key as keyof IAnimeSearchParams];
    //   console.log(newValue);
    //   console.log(tag.value);

      newValue = newValue
         .split(",")
         .filter((item: string) => item !== tag.value)
         .join(",");
    //   console.log(newValue);
      let newParams = deleteEmptyProperties({ ...params, ...{ [tag.key as keyof IAnimeSearchParams]: newValue } });
    //   console.log(newParams);

      dispatch(FilterActionCreators.setParams(newParams));
   };

   const getParamsValues = (params: IAnimeSearchParams): ITagObject[] => {
      let valuesArr: ITagObject[] = [];
      const hiddenParams = ["limit", "order_by", "page", "sfw", "sort"];
      for (const [key, value] of Object.entries(params)) {
         if (params.hasOwnProperty(key) && !hiddenParams.includes(key)) {
            if (key === "type") {
               filterTypeOptions.forEach((element) => {
                  if (value === element.value) {
                     valuesArr.push({ key, value: String(value), label: String(element.label) });
                  }
               });
            } else if (key === "genres") {
               filterGenreOptions.forEach((element) => {
                //   console.log(element);

                  let result = value.split(",").find((item: string) => item === element.value);

                  if (result) valuesArr.push({ key, value: String(result), label: String(element.label) });
               });
            } else if (key === "rating") {
               filterAgeOptions.forEach((element) => {
                  if (value === element.value) {
                     valuesArr.push({ key, value: String(value), label: String(element.label) });
                  }
               });
            } else if (key === "status") {
               filterStatusOptions.forEach((element) => {
                  if (value === element.value) {
                     valuesArr.push({ key, value: String(value), label: String(element.label) });
                  }
               });
            } else {
               valuesArr.push({ key, value: String(value), label: String(value) });
            }
         }
      }

      return valuesArr;
   };

   async function loadAnime() {
      await dispatch(FilterActionCreators.setAnime(params));
      dispatch(FilterActionCreators.setError(""));
   }

   async function fetchNewAnime(loadNewAnime?: boolean) {
      await dispatch(FilterActionCreators.setAnime(params));
      dispatch(FilterActionCreators.addParams({ page: 2 }, false));
   }

   async function fetchAnime() {
      setIsDebouncing(false);

      await dispatch(FilterActionCreators.addAnime(params));

      if (!error) {
         const currentPage = params.page || 1;
        //  console.log(currentPage);
         dispatch(FilterActionCreators.addParams({ page: currentPage + 1 }, false));
      } else {
         dispatch(FilterActionCreators.setError(""));
      }
   }

   useEffect(() => {
      if (loadNewAnime) {
         fetchNewAnime(loadNewAnime);
      }
   }, [loadNewAnime]);

   //    useEffect(() => {
   //       navigate("/anime");
   //    }, [params]);

   useEffect(() => {
      if (isLoading || error) return;
      if (observer.current) observer.current.disconnect();

      const callback = async (entries: any, observer: IntersectionObserver) => {
         if (entries[0].isIntersecting && hasMoreAnime) {
            setIsDebouncing(true);
            debouncedAnime();
         }
      };

      observer.current = new IntersectionObserver(callback);

      if (lastAnimeRow.current) observer.current.observe(lastAnimeRow.current);
   }, [isLoading, params.page]);

   //    console.log(`isLoading - ${isLoading} hasMoreAnime - ${hasMoreAnime}  error - ${error} isDebouncing - ${isDebouncing}`);

   console.log("rerender AnimeSort");

   return (
      <div className={classes["anime"]}>
         <div className={[classes["anime__container"], "_container-main"].join(" ")}>
            {/* <h2 className={classes["anime__title"]}>{"Catalog"}</h2> */}
            <div className={classes["anime__column"]}>
               <AnimeFilter />
               <div className={classes["anime__row"]}>
                  <div className={classes["anime__tags"]}>
                     <IoIosPricetags />

                     {getParamsValues(params).map((item, index) => (
                        <Tag value={item.label} key={index} onClick={(e) => handleClickTag(e, item)} />
                     ))}
                  </div>

                  <div className={classes["anime__buttons"]}>
                     <MySelect options={CONSTANTS.sortCategories} />
                     <div className={classes["anime__switches"]}>
                        {icons.map((icon, index) => (
                           <span
                              className={
                                 currentView === icon.accessor
                                    ? [classes["anime__icon"], classes["anime__icon_active"]].join(" ")
                                    : classes["anime__icon"]
                              }
                              key={index}
                              onClick={(e) => handleClick(e, icon.accessor)}
                           >
                              {icon.icon}
                           </span>
                        ))}
                     </div>
                  </div>
               </div>
               <AnimeList view={currentView} />
               <div ref={lastAnimeRow} className={classes["anime__lastRow"]}>
                  {(isLoading && hasMoreAnime && anime.length && <Loader />) || (isDebouncing && <Loader />)}
               </div>
            </div>
            {/* <AnimeSidebar anime={animeSeason} /> */}
         </div>
      </div>
   );
};

export default AnimeSort;
