import React from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import ReviewCarousel from "../../Review/ReviewCarousel/ReviewCarousel";

import classes from "./ProfileReviews.module.scss";

const ProfileReviews = () => {
   const { animeReviews } = useTypedSelector((state) => state.anime);

   return (
      <div className={classes["reviews"]}>
         <div className={[classes["reviews__container"], "_container-main"].join(" ")}>
            <ReviewCarousel reviews={animeReviews} />
         </div>
      </div>
   );
};

export default ProfileReviews;
