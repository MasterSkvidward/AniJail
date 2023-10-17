import React from "react";
import Title from "../../../UI/Title/Title";
import Review from "../../Review/Review/Review";

import classes from "./AnimeFeedback.module.scss";
import reviewUserImage from "../../../assets/images/makima.jpg";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

import background_image from "../../../assets/images/igris-solo-leveling.jpg";

import Carousel from "../../../UI/Carousel/Carousel";
import { reviewsCarouselOptions } from "../../../UI/Carousel/media-options";
import ReviewCarousel from "../../Review/ReviewCarousel/ReviewCarousel";

const AnimeFeedback = () => {
    const { animeReviews } = useTypedSelector((state) => state.anime);

    return (
        <div className={classes.anime}>
            {animeReviews.length > 0 && (
                <div className={classes["anime__reviews"]}>
                    <div className={[classes["reviews__container"], "_container1800"].join(" ")}>
                        <ReviewCarousel reviews={animeReviews} />
                    </div>

                    {/* <div className={classes["anime__comments"]}>
          <div
            className={classes["comments__container"] + " " + "_container1800"}
          >
            <Title value={"Comments"} />
          </div>
        </div> */}
                </div>
            )}
        </div>
    );
};

export default AnimeFeedback;
