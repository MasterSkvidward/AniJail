import React, { useEffect } from "react";
import Title from "../../../UI/Title/Title";
import Review from "../../Review/Review/Review";

import classes from "./AnimeFeedback.module.scss";
import reviewUserImage from "../../../assets/images/makima.jpg";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

import background_image from "../../../assets/images/igris-solo-leveling.jpg";

import Carousel from "../../../UI/Carousel/Carousel";
import { reviewsCarouselOptions } from "../../../UI/Carousel/media-options";
import ReviewCarousel from "../../Review/ReviewCarousel/ReviewCarousel";
import Comments from "../../Comments/Comments";
import { useDispatch } from "react-redux";
import { AnimeActionCreators } from "../../../store/reducers/anime/action-creatores";
import { getAnimeEpisodeUrl } from "../../../utils/utils";
import AnimeRecommendations from "../AnimeRecommendations/AnimeRecommendations";

const AnimeFeedback = () => {
   const { animeReviews } = useTypedSelector((state) => state.anime);
   const dispatch = useDispatch();

   return (
      <div className={classes.anime}>
         <div className={classes["recommendations"]}>
            <div className={[classes["recommendations__container"], "_container-main"].join(" ")}>
               <AnimeRecommendations />
            </div>
         </div>

         <div className={classes["reviews"]}>
            <div className={[classes["reviews__container"], "_container-main"].join(" ")}>
               <ReviewCarousel reviews={animeReviews} />
            </div>
         </div>

         <div className={classes["comments"]}>
            <div className={[classes["comments__container"], "_container-main"].join(" ")}>
               <Comments />
            </div>
         </div>
      </div>
   );
};

export default AnimeFeedback;
