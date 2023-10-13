import React,{FC} from 'react';
import { IAnimeReview } from '../../types/jikanMoe/jikan';
import { getShortenedString } from '../../utils/utils';

import classes from "./Review.module.scss";

import {AiTwotoneLike, AiTwotoneDislike} from "react-icons/ai";

interface ReviewProps {
    review: IAnimeReview
}

const Review:FC<ReviewProps> = ({review}) => {

    if (!review) return (<></>);
    
    return (
       <div className={classes.review}>
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
                <div className={classes["review__date"]}>{review.date}</div>
           </div>
           <div className={classes["review__body"]}>
                <h4 className={classes["review__tag"]}>{review.tags}</h4>
                {getShortenedString(review.review, 550) || ""}
             
           </div>
           <div className={classes["review__footer"]}>
                <button className={[classes["review__btn"], classes["review__btn_green"]].join(" ")}><AiTwotoneLike/><span>Like</span></button>
                <button className={[classes["review__btn"], classes["review__btn_red"]].join(" ")}><AiTwotoneDislike/><span>Dislike</span></button>
           </div>
       </div>
    );
}

export default Review;