import React from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import ReviewsCount from "../../../UI/ReviewsCount/ReviewsCount";
import Title from "../../../UI/Title/Title";
import Review from "../Review/Review";
import classes from "./ReviewGrid.module.scss";

const ReviewGrid = () => {
   const { animeReviews } = useTypedSelector((state) => state.anime);

   return (
      <div className={classes["reviews"]}>
         <div className={[classes["reviews__container"], "_container-main"].join(" ")}>
            {/* <ReviewCarousel reviews={animeReviews} /> */}
            <div className={classes["reviews__row"]}>
               <Title value={`Reviews`} amount={46} isLink={false} />
               <ReviewsCount counts={{ positive: 32, neutral: 10, negative: 4 }} />
            </div>

            <div className={classes["reviews__grid"]}>
               <div className={classes["reviews__item"]}>
                  <Review review={animeReviews[0]} showFull={true} />
               </div>
               <div className={classes["reviews__item"]}>
                  <Review review={animeReviews[2]} showFull={true} />
               </div>
               <div className={classes["reviews__item"]}>
                  <Review review={animeReviews[3]} showFull={true} />
               </div>
               <div className={classes["reviews__item"]}>
                  <Review review={animeReviews[4]} showFull={true} />
               </div>
               <div className={classes["reviews__item"]}>
                  <Review review={animeReviews[5]} showFull={true} />
               </div>
               <div className={classes["reviews__item"]}>
                  <Review review={animeReviews[1]} showFull={true} />
               </div>
               <div className={classes["reviews__item"]}>
                  <Review review={animeReviews[6]} showFull={true} />
               </div>
               <div className={classes["reviews__item"]}>
                  <Review review={animeReviews[7]} showFull={true} />
               </div>
               <div className={classes["reviews__item"]}>
                  <Review review={animeReviews[0]} showFull={true} />
               </div>
               <div className={classes["reviews__item"]}>
                  <Review review={animeReviews[3]} showFull={true} />
               </div>
               <div className={classes["reviews__item"]}>
                  <Review review={animeReviews[4]} showFull={true} />
               </div>
               <div className={classes["reviews__item"]}>
                  <Review review={animeReviews[0]} showFull={true} />
               </div>
            </div>
         </div>
      </div>
   );
};

export default ReviewGrid;
