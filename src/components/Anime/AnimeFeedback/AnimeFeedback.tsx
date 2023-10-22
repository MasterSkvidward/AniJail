import React from "react";
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

const AnimeFeedback = () => {
   const { animeReviews } = useTypedSelector((state) => state.anime);

   return (
      <div className={classes.anime}>
         <div className={classes["anime__reviews"]}>
            <div className={[classes["reviews__container"], "_container-main"].join(" ")}>
               <ReviewCarousel reviews={animeReviews} />
            </div>

            {/* <div className={classes["anime__comments"]}>
          <div
            className={classes["comments__container"] + " " + "_container-main"}
          >
            <Title value={"Comments"} />
          </div>
        </div> */}
         </div>
         <div className={classes["anime__comments"]}>
            <div className={[classes["comments__container"], "_container-main"].join(" ")}>
               <Comments />
            </div>
         </div>
      </div>
   );
};

export default AnimeFeedback;
