import React, { useRef, FC, useState, useEffect, MouseEvent, Dispatch, SetStateAction } from "react";
import classes from "./SearchBar.module.scss";
import MyInput from "../../UI/MyInput/MyInput";
import { AiOutlineSearch } from "react-icons/ai";
import AnimeItemSmall from "../Anime/AnimeItemSmall/AnimeItemSmall";
import { IAnime, IAnimeSearchParams } from "../../types/jikanMoe/jikan";
import useDebounce from "../../hooks/useDebounce";
import { AnimeService } from "../../services/AnimeService";
import MyModal from "../../UI/MyModal/MyModal";
import { Link, Search, useNavigate } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { AnimeActionCreators } from "../../store/reducers/anime/action-creatores";
import { useDispatch } from "react-redux";
import Loader from "../../UI/Loader/Loader";
import SearchInput from "../../UI/SearchInput/SearchInput";
import { defaultFilterParams } from "../../store/reducers/filter/filterReducer";
import { FilterActionCreators } from "../../store/reducers/filter/action-creatores";

interface SearchBarProps {
   visible: boolean;
   setVisible: Dispatch<SetStateAction<boolean>>;
}

const SearchBar: FC<SearchBarProps> = ({ visible, setVisible }) => {
   const search = useRef<HTMLFormElement>(null);
   const searchList = useRef<HTMLDivElement>(null);
   const dispatch = useDispatch();

   //    const [visible, setVisible] = useState<boolean>(false);
   const [value, setValue] = useState<string>("");
   //   const [animeItems, setAnimeItems] = useState<IAnime[] | []>([]);

   const { animeSearch, animeSearchLoading, animeSearchError } = useTypedSelector((state) => state.anime);

   const debouncedSearch = useDebounce(searchAnime, 400);
   const navigate = useNavigate();

   async function searchAnime() {
      // const response = await AnimeService.getAnimeBySearch(searchParams);
      await dispatch(AnimeActionCreators.GetAnimeSearch(searchParams));
   }

   const searchParams: IAnimeSearchParams = {
      q: value,
      order_by: "score",
      sort: "desc",
      limit: 15,
      sfw: false,
   };

   const handlerFocusIn = (e: FocusEvent): void => {
      search.current?.classList.add(classes.focused);
      setVisible(true);
      e.stopPropagation();
   };

   const handlerClick = (e: MouseEvent): void => {
      e.stopPropagation();
   };

   const handlerClickMenu = (e: MouseEvent): void => {
      setVisible(false);
      e.stopPropagation();
   };

   const handlerMouseDown = (e: MouseEvent): void => {
      e.stopPropagation();
   };

   function handlerDocumentClick(e: Event): void {
      setVisible(false);
   }

   const handleSeeAll = (): void => {
      if (value) {
         dispatch(FilterActionCreators.setParams({ ...defaultFilterParams, q: value }));
      }

      navigate("/anime");
   };

   useEffect(() => {
      visible && debouncedSearch();
      if (searchList.current?.scrollTop) searchList.current.scrollTop = 0;
   }, [value]);

   useEffect(() => {
      document.addEventListener("mousedown", handlerDocumentClick);
      search.current?.addEventListener("focusin", handlerFocusIn);
   }, []);

   return (
      <form
         ref={search}
         className={visible ? [classes.search, classes.focused].join(" ") : classes.search}
         onClick={handlerClick}
         onMouseDown={handlerMouseDown}
         onSubmit={(e) => e.preventDefault()}
      >
         {/* <MyInput setValue={setValue} placeholder={"Search anime..."} styles={{padding: "25px 15px"}}/>
         <div className={classes.search__loupe}>
            <AiOutlineSearch />
         </div> */}

         <SearchInput value={value} setValue={setValue} placeholder="Search..." styles={{ padding: "10px 10px" }} />
         <div
            ref={searchList}
            className={visible ? [classes.search__list, classes.active].join(" ") : classes.search__list}
            onClick={handlerClickMenu}
         >
            {animeSearch.length && !animeSearchLoading ? (
               <div className={classes.search__items}>
                  {animeSearch.map((anime, index) => (
                     <AnimeItemSmall anime={anime} key={index} />
                  ))}
               </div>
            ) : animeSearchLoading || animeSearchError ? (
               <div className={classes["search__loader"]}>
                  <Loader />
               </div>
            ) : (
               <></>
            )}

            <div className={classes["search__all"]} onClick={handleSeeAll}>
               See all results for "{value}"
            </div>
         </div>
      </form>
   );
};

export default SearchBar;
