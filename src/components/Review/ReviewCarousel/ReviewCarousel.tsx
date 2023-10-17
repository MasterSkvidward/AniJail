import React, {FC} from "react";

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

const ReviewCarousel:FC<ReviewCarouselProps> = ({reviews}) => {

  return (
    <div className={classes["reviews"]}>
      <Title value={"Reviews"} />
      <div className={classes["reviews__row"]}>
        <Carousel options={reviewsCarouselOptions} arrowTop={46}>
          {reviews.slice(0, 20).map((review, index) => (
            // <AnimeItem anime={item} key={index} />
            <Review review={review} key={index} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ReviewCarousel;
