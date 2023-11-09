import React, { FC, MouseEvent, useEffect, useState } from "react";
import { IAnimeReview } from "../../../types/jikanMoe/jikan";
import { getDateFromTimeStamp, getExactTimeFromDate, getScoreColor, getShortenedString } from "../../../utils/utils";

import classes from "./Review.module.scss";

import { AiTwotoneLike, AiTwotoneDislike } from "react-icons/ai";
import ContentLoader from "react-content-loader";

interface ReviewProps {
   review: IAnimeReview | null;
}

const Review: FC<ReviewProps> = ({ review }) => {
   const [likeCount, setLikeCount] = useState<number>(0);
   const [dislikeCount, setDislikeCount] = useState<number>(0);
   const [userVote, setUserVote] = useState<"like" | "dislike" | "">("");

   const likeButtonClasses =
      userVote !== "like"
         ? [classes["review__btn"], classes["review__btn_green"]].join(" ")
         : [classes["review__btn"], classes["review__btn_green"], classes["clicked"]].join(" ");

   const dislikeButtonClasses =
      userVote !== "dislike"
         ? [classes["review__btn"], classes["review__btn_red"]].join(" ")
         : [classes["review__btn"], classes["review__btn_red"], classes["clicked"]].join(" ");

   const handleLike = (e: MouseEvent): void => {
      if (userVote === "") {
         setLikeCount(likeCount + 1);
         setUserVote("like");
      } else if (userVote === "dislike") {
         setLikeCount(likeCount + 1);
         setDislikeCount(dislikeCount - 1);
         setUserVote("like");
      } else {
         setLikeCount(likeCount - 1);
         setUserVote("");
      }
   };

   const handleDislike = (e: MouseEvent): void => {
      if (userVote === "") {
         setDislikeCount(dislikeCount + 1);
         setUserVote("dislike");
      } else if (userVote === "like") {
         setDislikeCount(dislikeCount + 1);
         setLikeCount(likeCount - 1);
         setUserVote("dislike");
      } else {
         setDislikeCount(dislikeCount - 1);
         setUserVote("");
      }
   };

   useEffect(() => {
      setLikeCount((review?.reactions.love_it || 0) + (review?.reactions.nice || 0));
      setDislikeCount(review?.reactions.confusing || 0);
   }, []);

   if (!review)
      return (
         <ContentLoader
            speed={2}
            className={classes["skeleton"]}
            foregroundColor="var(--background-secondary)"
            backgroundColor="var(--background-skeleton)"
         >
            <rect x="0" y="0" rx="2" ry="2" width="563" height="425" />
            {/* <rect x="0" rx="2" ry="2" width="500" height="500" /> */}
         </ContentLoader>
      );

   return (
      <div className={[classes.review, classes[getScoreColor(review.score)]].join(" ")}>
         <div className={classes["review__header"]}>
            <div className={[classes["review__user"], classes["user"]].join(" ")}>
               <div className={classes["user__image"]}>
                  <img src={review.user.images.jpg.image_url || ""} alt="" />
               </div>
               <div className={classes["user__body"]}>
                  <span className={classes["user__name"]}>{review.user.username}</span>
                  <span className={classes["user__reviews-amount"]}>24 reviews</span>
               </div>
            </div>
            <div className={classes["review__date"]}>{getExactTimeFromDate(getDateFromTimeStamp(review.date))}</div>
         </div>
         <div className={classes["review__body"]}>
            <h4 className={classes["review__tag"]}>{review.tags.join(", ")}</h4>
            <p>{getShortenedString(review.review, 400)}</p>
            <button className={classes["review__show-more"]}>Show full review</button>
         </div>
         <div className={classes["review__footer"]}>
            <div></div>

            <div className={classes["review__buttons"]}>
               <button className={likeButtonClasses} onClick={handleLike}>
                  <AiTwotoneLike />
                  <span>Like</span>
                  <span>{likeCount}</span>
               </button>
               <button className={dislikeButtonClasses} onClick={handleDislike}>
                  <AiTwotoneDislike />
                  <span>Dislike</span>
                  <span>{dislikeCount}</span>
               </button>
            </div>
         </div>
      </div>
   );
};

export default Review;
