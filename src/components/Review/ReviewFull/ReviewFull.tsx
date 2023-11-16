import { FC } from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { IAnimeReview } from "../../../types/jikanMoe/jikan";
import classes from "./ReviewFull.module.scss";

import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

interface ReviewFullProps {
   review: IAnimeReview;
}

const ReviewFull: FC<ReviewFullProps> = ({ review }) => {
   const { animeSingle, animeReviews, animeReviewsLoading, animeReviewsError } = useTypedSelector((state) => state.anime);

   if (!review) return <></>;

   return (
      <div className={classes["review"]}>
         <ImQuotesLeft />

         <p className={classes["review__body"]}>{review.review || ""}</p>

         <div className={classes["review__footer"]}></div>
         <ImQuotesRight />
      </div>
   );
};

export default ReviewFull;
