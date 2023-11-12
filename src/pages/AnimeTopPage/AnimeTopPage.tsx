import { useEffect } from "react";
import { useDispatch } from "react-redux";
import AnimeSort from "../../components/Anime/AnimeSort/AnimeSort";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import classes from "./AnimeTopPage.module.scss";
import { useComponentDidMount } from "../../hooks/useComponentDidMount";
import AnimeFilter from "../../components/Anime/AnimeFilter/AnimeFilter";
import AnimeSidebar from "../../components/Anime/AnimeSidebar/AnimeSidebar";
import { AnimeActionCreators } from "../../store/reducers/anime/action-creatores";
import { FilterActionCreators } from "../../store/reducers/filter/action-creatores";
import CommonTitle from "../../UI/CommonTitle/CommonTitle";
import { defaultFilterParams } from "../../store/reducers/filter/filterReducer";


const AnimeTopPage = () => {
    const dispatch = useDispatch();

   useEffect(() => {
      window.scrollTo(0, 0);
    //   dispatch(FilterActionCreators.setParams({ ...defaultFilterParams,  }));
   }, []);

   return (
      <div className={classes["anime"]}>
         <AnimeSort />
      </div>
   );
};

export default AnimeTopPage;
