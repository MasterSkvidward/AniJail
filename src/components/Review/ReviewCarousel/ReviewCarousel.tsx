import React, { FC } from "react";

import Title from "../../../UI/Title/Title";
import { reviewsCarouselOptions } from "../../../UI/Carousel/media-options";

import classes from "./ReviewCarousel.module.scss";
import Carousel from "../../../UI/Carousel/Carousel";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import Review from "../Review/Review";
import { IAnimeReview } from "../../../types/jikanMoe/jikan";

interface ReviewCarouselProps {
   reviews: IAnimeReview[];
}

const ReviewCarousel: FC<ReviewCarouselProps> = ({ reviews }) => {
   const { animeSingle, animeReviews, animeReviewsLoading, animeReviewsError } = useTypedSelector((state) => state.anime);

   return (
      <div className={classes["reviews"]}>
         <div className={classes["reviews__header"]}>
            <Title value={`Reviews`} amount={46} isLink={true} />
            <div className={classes["reviews__counts"]}>
                <div className={classes["reviews__positive"]}>Positive<span className={classes["reviews__amount"]}>{34}</span></div>
                <div className={classes["reviews__neutral"]}>Neutral<span className={classes["reviews__amount"]}>{8}</span></div>
                <div className={classes["reviews__negative"]}>Negative<span className={classes["reviews__amount"]}>{4}</span></div>
            </div>
         </div>

         {reviews.length === 0 && !animeReviewsLoading && !animeReviewsError ? (
            <p className={classes["reviews__empty"]}>This show have no reviews.</p>
         ) : (
            <div className={classes["reviews__row"]}>
               <Carousel options={reviewsCarouselOptions} arrowTop={46}>
                  {reviews.length > 0
                     ? reviews.slice(0, 20).map((review, index) => <Review review={review} key={index} />)
                     : [...new Array(3)].map((item, index) => <Review review={null} key={index} />)}
               </Carousel>
            </div>
         )}
      </div>
   );
};

export default ReviewCarousel;
