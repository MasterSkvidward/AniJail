import React from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import Review from "../../Review/Review/Review";
import ReviewCarousel from "../../Review/ReviewCarousel/ReviewCarousel";

import classes from "./ProfileReviews.module.scss";

const ProfileReviews = () => {
   const { animeReviews } = useTypedSelector((state) => state.anime);

   return (
      <div className={classes["reviews"]}>
         <div className={[classes["reviews__container"], "_container-main"].join(" ")}>
            {/* <ReviewCarousel reviews={animeReviews} /> */}
            <div className={classes["reviews__column"]}>
                <Review review={animeReviews[0]} showFull={true}/>
                <Review review={animeReviews[1]} showFull={true}/>
                <Review review={animeReviews[2]} showFull={true}/>
                <Review review={animeReviews[3]} showFull={true}/>
                <Review review={animeReviews[4]} showFull={true}/>
            </div>
         </div>
      </div>
   );
};

export default ProfileReviews;
