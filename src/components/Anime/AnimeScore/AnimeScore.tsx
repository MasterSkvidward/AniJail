import { FC, useState, useEffect, MouseEvent } from "react";
import { AiFillStar } from "react-icons/ai";
import MyRating from "../../../UI/MyRating/MyRating";
import Score from "../../../UI/Score/Score";
import { getScoreColor, splitNumberByThree } from "../../../utils/utils";
import classes from "./AnimeScore.module.scss";

import branchLeft from "../../../assets/icons/branch-left.svg";
import branchRight from "../../../assets/icons/branch-right.svg";
import { Link, Routes } from "react-router-dom";
import { publicRoutes } from "../../AppRouter/routes";
import RankStatus from "../../../UI/RankStatus/RankStatus";

interface AnimeScoreProps {
   score: number;
   scoredBy: number;
   rank: number;
}

const AnimeScore: FC<AnimeScoreProps> = ({ score, scoredBy, rank }) => {
   const [ratingVisible, setRatingVisible] = useState(false);
   const [userRating, setUserRating] = useState<number>(7);

   const handlerRateClick = (e: MouseEvent): void => {
      setRatingVisible(!ratingVisible);
      e.stopPropagation();
   };

   const handlerDocumentClick = (e: Event): void => {
      setRatingVisible(false);
   };

   useEffect(() => {
      document.addEventListener("click", handlerDocumentClick);
      return () => document.removeEventListener("click", handlerDocumentClick);
   }, []);

   return (
      <div className={classes["anime"]}>
         <div className={classes["anime__numbers"]}>
            {score ? <Score score={score} /> : <span className={classes["anime__score"]}>No scores</span>}

            <span className={classes["anime__scoredBy"]}>{`Scored by: ${splitNumberByThree(scoredBy || 0)}`}</span>
         </div>

         <div className={classes["rate"]} onClick={handlerRateClick}>
            <div className={classes["rate__btn"]}>
               <span>{userRating ? "Change score" : "Rate"}</span>
               {userRating !== 0 && (
                  <span className={classes[getScoreColor(userRating || 0)]}>
                     <AiFillStar />
                     {userRating}
                  </span>
               )}
            </div>
            {/* <MyButton value='Rate'/> */}
            <div className={ratingVisible ? [classes["rate__block"], classes["active"]].join(" ") : classes["rate__block"]}>
               <div className={classes["rate__body"]}>
                  <MyRating
                     userRating={userRating}
                     setUserRating={setUserRating}
                     setRatingVisible={setRatingVisible}
                     maxWidth={400}
                  />
               </div>
            </div>
         </div>

         {rank && rank <= 100 && (
            <div className={classes["anime__rank"]}>
               <RankStatus all={100} rank={rank} />
            </div>
         )}
      </div>
   );
};

export default AnimeScore;
