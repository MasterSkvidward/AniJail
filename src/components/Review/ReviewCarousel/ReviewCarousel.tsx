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
         <Title value={"Reviews"} link={`/anime/${animeSingle?.mal_id}/reviews`}/>
         {reviews.length === 0 && !animeReviewsLoading && !animeReviewsError ? (
            <p>This show have no reviews.</p>
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
