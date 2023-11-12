import { useEffect } from "react";
import { useDispatch } from "react-redux";
import AnimeSort from "../../components/Anime/AnimeSort/AnimeSort";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import classes from "./AnimePage.module.scss";
import { useComponentDidMount } from "../../hooks/useComponentDidMount";
import AnimeFilter from "../../components/Anime/AnimeFilter/AnimeFilter";
import AnimeSidebar from "../../components/Anime/AnimeSidebar/AnimeSidebar";
import { AnimeActionCreators } from "../../store/reducers/anime/action-creatores";
import { FilterActionCreators } from "../../store/reducers/filter/action-creatores";

const AnimePage = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   return (
      <div className={classes["anime"]}>
         <AnimeSort />
      </div>
   );
};

export default AnimePage;
