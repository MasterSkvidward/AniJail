import React from "react";
import Title from "../../../UI/Title/Title";
import Review from "../../Review/Review";

import classes from "./AnimeFeedback.module.scss";
import reviewUserImage from "../../../assets/images/makima.jpg";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

const AnimeFeedback = () => {
  const { animeReviews } = useTypedSelector((state) => state.anime);

  return (
    <div className={classes.anime}>
      <div className={classes["anime__reviews"]}>
        <div className={classes["reviews__container"] + " " + "_container1800"}>
          {animeReviews.length > 0 && (
            <div className={classes["reviews__column"]}>
              <Title value={"Reviews"} />
                <div className={classes["reviews__row"]} >
                    {animeReviews.slice(0, 3).map((review, index) => (
                    <Review review={review} key={index}/>
                ))}
                </div>
            
            </div>
          )}
        </div>

        {/* <div className={classes["anime__comments"]}>
          <div
            className={classes["comments__container"] + " " + "_container1800"}
          >
            <Title value={"Comments"} />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default AnimeFeedback;
