import React, { FC } from "react";
import { IAnime } from "../../../types/jikanMoe/jikan";
import Image from "../../../UI/Image/Image";
import { Link, useNavigate } from "react-router-dom";
import { formatGenres } from "../../../helpers/helpers";

import classes from "./AnimeItemSmall.module.scss";
import { publicRoutes } from "../../AppRouter/routes";
import Score from "../../../UI/Score/Score";

interface AnimeItemSmallProps {
  anime: IAnime;
}

const AnimeItemSmall: FC<AnimeItemSmallProps> = ({ anime }) => {
  const navigate = useNavigate();

  const handleClick = (id: number) => {
    navigate(`/anime/${id}`);
    navigate(0);
  };

  return (
    <div className={classes["anime"]} onClick={() => handleClick(anime.mal_id)}>
      <div className={classes["image"]}>
        <Image url={anime.images.jpg.image_url} />
      </div>
      <div className={classes["body"]}>
        <div className={classes["body__title"]}>
          <h5 className={classes["body__title_en"]}>
            {anime?.title_english ? anime.title_english : anime?.title}
          </h5>
          <h5 className={classes["body__title_jp"]}>{anime?.title_japanese}</h5>
        </div>

        <div className={classes["body__type"]}>
          {anime.year ? `${anime.type}, ${anime.year}` : anime.type}
        </div>

        <div className={classes["body__info"]}>
          <Score score={anime?.score || 0} />
          <div className={classes["body__genres"]}>
            {formatGenres(anime?.genres).map((genre, index) => (
              <div className={classes["body__genre"]} key={index}>
                {genre}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeItemSmall;
