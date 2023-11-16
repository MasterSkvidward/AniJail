import { FC } from "react";
import classes from "./ReviewsCount.module.scss";

interface ReviewsCountProps {
   counts: {
      positive: number;
      neutral: number;
      negative: number;
   };
}

const ReviewsCount: FC<ReviewsCountProps> = ({ counts }) => {
   return (
      <div className={classes["reviews__counts"]}>
         <div className={classes["reviews__positive"]}>
            Positive<span className={classes["reviews__amount"]}>{counts.positive}</span>
         </div>
         <div className={classes["reviews__neutral"]}>
            Neutral<span className={classes["reviews__amount"]}>{counts.neutral}</span>
         </div>
         <div className={classes["reviews__negative"]}>
            Negative<span className={classes["reviews__amount"]}>{counts.negative}</span>
         </div>
      </div>
   );
};

export default ReviewsCount;
