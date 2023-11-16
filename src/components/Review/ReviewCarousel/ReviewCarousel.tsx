import React, { FC } from "react";

import Title from "../../../UI/Title/Title";
import { reviewsCarouselOptions } from "../../../UI/Carousel/media-options";

import classes from "./ReviewCarousel.module.scss";
import Carousel from "../../../UI/Carousel/Carousel";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import Review from "../Review/Review";
import { IAnimeReview } from "../../../types/jikanMoe/jikan";
import { Link, useParams } from "react-router-dom";
import ReviewsCount from "../../../UI/ReviewsCount/ReviewsCount";

interface ReviewCarouselProps {
   reviews: IAnimeReview[];
}

type ParamsType = {
   id: string;
};

const ReviewCarousel: FC<ReviewCarouselProps> = ({ reviews }) => {
   const { animeSingle, animeReviews, animeReviewsLoading, animeReviewsError } = useTypedSelector((state) => state.anime);

   const params = useParams<ParamsType>();

   return (
      <div className={classes["reviews"]}>
         <div className={classes["reviews__header"]}>
            <Link to={`/anime/${params.id}/reviews`}>
               <Title value={`Reviews`} amount={46} isLink={true} />
            </Link>
            <ReviewsCount counts={{ positive: 32, neutral: 10, negative: 4 }} />
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
