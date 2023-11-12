import { FC, useEffect } from "react";
import CarouselBlock from "../../components/Carousel/CarouselBlock/CarouselBlock";
import classes from "./HomePage.module.scss";

import { useDispatch } from "react-redux";
import { AnimeActionCreators } from "../../store/reducers/anime/action-creatores";
import { IAnimeSearchParams } from "../../types/jikanMoe/jikan";
import FAQ from "../../components/FAQ/FAQ,";
import AnimePromo from "../../components/Anime/AnimePromo/AnimePromo";
import CarouselBig from "../../components/Carousel/CarouselBig/CarouselBig";

const HomePage: FC = () => {
   const dispatch = useDispatch();

   const fetchSeasonAnime = (params?: IAnimeSearchParams) => {
      dispatch(AnimeActionCreators.GetAnimeSeason(params));
   };

   useEffect(() => {
      window.scrollTo(0, 0);
      fetchSeasonAnime();
   }, []);

   return (
      <div className={classes.homepage}>
         <CarouselBig />
         <CarouselBlock />
         <AnimePromo />
         <FAQ />
      </div>
   );
};

export default HomePage;
