import { FC, MouseEvent } from "react";
import { Link } from "react-router-dom";
import { formatGenres } from "../../../helpers/helpers";
import { IAnime } from "../../../types/jikanMoe/jikan";
import DropMenu from "../../../UI/DropMenu/DropMenu";
import RankStatus from "../../../UI/RankStatus/RankStatus";
import Score from "../../../UI/Score/Score";
import Tag from "../../../UI/Tag/Tag";
import { watchCategories } from "../AnimeCard/constants";
import classes from "./AnimeItemMedium.module.scss";

interface AnimeItemSmallProps {
   anime: IAnime;
}

const AnimeItemMedium: FC<AnimeItemSmallProps> = ({ anime }) => {
   const handleClickAnime = (e: MouseEvent): void => {
      e.stopPropagation();
   };

   return (
      <div className={classes["anime"]}>
         <Link to={`/anime/${anime.mal_id}`}>
            <div className={classes["image"]}>
               <img src={anime.images.jpg.large_image_url} alt={anime.title_english} />
            </div>
         </Link>

         <div className={classes["body"]}>
            <div className={classes["body__title"]}>
               <Link to={`/anime/${anime.mal_id}`}>
                  <h5 className={classes["body__title_en"]}>{anime?.title_english ? anime.title_english : anime?.title}</h5>
               </Link>
               <h5 className={classes["body__title_jp"]}>{anime?.title_japanese}</h5>
            </div>

            <div className={classes["body__studios"]}>
               {anime.studios.map((studio, index) => (
                  <span className={classes["body__studio"]} key={index}>
                     {studio.name}
                  </span>
               ))}
            </div>
            <div className={classes["body__type"]}>{anime.year ? `${anime.type}, ${anime.year}` : anime.type}</div>

            <div className={classes["body__info"]}>
               <div className={classes["body__genres"]}>
                  {formatGenres(anime?.genres).map((genre, index) => (
                     <Tag
                        value={genre}
                        onClick={(e) => {
                           e.stopPropagation();
                        }}
                        key={index}
                     />
                     // <div className={classes["body__genre"]} key={index}>
                     //    {genre}
                     // </div>
                  ))}
               </div>
               {/* <Score score={anime?.score || 0} /> */}
            </div>
         </div>
         <div className={classes["anime__score"]}>
            <Score score={anime?.score || 0} />
            {anime.rank && anime.rank <= 100 && <RankStatus all={100} rank={anime.rank} width={31} fontSize={"0.55em"} />}
         </div>
         <div className={classes["anime__user"]}>
            <DropMenu defaultValue={{ name: "Add to List", accessor: "add" }} options={watchCategories} />
         </div>
      </div>
   );
};

export default AnimeItemMedium;
