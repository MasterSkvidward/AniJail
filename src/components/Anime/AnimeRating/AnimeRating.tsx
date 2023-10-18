import React, {FC, useState} from "react";

import Title from "../../../UI/Title/Title";
import classes from "./AnimeRating.module.scss";
import MyRating from "../../../UI/MyRating/MyRating";
import Score from "../../../UI/Score/Score";
import { splitNumberByThree } from "../../../utils/utils";
import { BsFillPencilFill } from "react-icons/bs";

interface AnimeRatingProps {
    score: number | undefined
    scoredBy: number | undefined
}

const AnimeRating:FC<AnimeRatingProps> = ({ score, scoredBy }) => {
   const [userRating, setUserRating] = useState<number>(7);

   return (
      <div className={classes["rating"]}>
         <Title value={"Rating"} />
         <div className={classes["rating__row"]}>
            <div className={classes["rating__rate"]}>
               <MyRating
                  userRating={userRating}
                  setUserRating={setUserRating}
                  maxWidth={400}
                  items={10}
                  showUserRating={true}
               />
            </div>
            <div className={classes["rating__column"]}>
               {score ? <Score score={score} /> : <span>No scores</span>}

               <span className={classes["rating__scored-by"]}>{`Scored by: ${splitNumberByThree(
                  scoredBy || 0
               )}`}</span>
            </div>
         </div>
         <button className={classes["rating__review"]}>
            <BsFillPencilFill />
            <span>Write review</span>
         </button>
      </div>
   );
};

export default AnimeRating;
