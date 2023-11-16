import React from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import ReviewsCount from "../../../UI/ReviewsCount/ReviewsCount";
import Title from "../../../UI/Title/Title";
import Review from "../../Review/Review/Review";
import ReviewCarousel from "../../Review/ReviewCarousel/ReviewCarousel";
import ReviewGrid from "../../Review/ReviewGrid/ReviewGrid";

import classes from "./ProfileReviews.module.scss";

const ProfileReviews = () => {
   return (
      <div className={classes["reviews"]}>
         <ReviewGrid />
      </div>
   );
};

export default ProfileReviews;
