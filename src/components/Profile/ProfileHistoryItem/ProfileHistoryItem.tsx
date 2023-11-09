import { FC } from "react";
import { IAnime } from "../../../types/jikanMoe/jikan";
import classes from "./ProfileHistoryItem.module.scss";
import Score from "../../../UI/Score/Score";
import { Link } from "react-router-dom";

interface ProfileHistoryItemProps {
   anime: IAnime;
}

const ProfileHistoryItem: FC<ProfileHistoryItemProps> = ({ anime }) => {
   return (
      <Link to={`/anime/${anime.mal_id}`}>
         <div className={classes["item"]}>
            <div className={classes["item__img"]}>
               <img src={anime.images.jpg.image_url} alt={anime.title} />
            </div>
            <div className={classes["item__body"]}>
               <div className={classes["item__description"]}>
                  <p className={classes["item__title"]}>{anime.title}</p>
                  <p className={classes["item__action"]}>
                     {"Viewed and rated at"}
                     <span>8</span>
                  </p>
               </div>
               <div className={classes["item__info"]}>
                  <p>{anime.type}</p>
                  <Score score={anime.score} />
               </div>
            </div>

            <div className={classes["item__date"]}>{"2 days ago"}</div>
         </div>
      </Link>
   );
};

export default ProfileHistoryItem;
