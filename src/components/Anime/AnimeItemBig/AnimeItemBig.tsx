import React, { FC, useEffect, useState } from "react";
import { IAnime } from "../../../types/jikanMoe/jikan";
import classes from "./AnimeItemBig.module.scss";
import {
  getScoreColor,
  getShortenedString,
  get_average_rgb,
} from "../../../utils/utils";

import { formatColor, formatGenres } from "../../../helpers/helpers";

import { BsArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { publicRoutes } from "../../AppRouter/routes";

interface AnimeItemBigProps {
  anime: IAnime;
}

const AnimeItemBig: FC<AnimeItemBigProps> = ({ anime }) => {
  const [animeColor, setAnimeColor] = useState<string>("");
  const navigate = useNavigate();

  const getAnimeColor = async () => {
    const color = await get_average_rgb(anime.images.jpg.large_image_url);
    setAnimeColor(formatColor(color.toString()));
  };

  useEffect(() => {
    getAnimeColor();
  }, []);


  
  if (!anime) return <div className={classes["anime-skeleton"]}></div>


  return (
    <div
      className={classes["anime"]}
      onClick={() => navigate(`/anime/${anime?.mal_id}`)}
    >
      <div
        className={classes["anime__body"]}
        style={{
          background: `linear-gradient(to bottom, transparent 35%, rgba(${animeColor}, 1) 100%), url(${anime.images.jpg.large_image_url}) 0 0/ cover no-repeat`,
        }}
      >
        <div className={classes["anime__block"]}>
          <h4 className={classes["anime__title"]}>
            {getShortenedString(
              anime.title_english ? anime.title_english : anime.title,
              42
            )}
          </h4>
          <div className={classes["anime__synopsis"]}>
            {getShortenedString(anime.synopsis, 130) || "Nothing yet..."}
          </div>
          <div className={classes["anime__details"]}>
            {/* <span>{`${anime.type}, ${anime.year}`}</span> */}

            {formatGenres(anime.genres).map(
              (genre, index) =>
                index < 3 && (
                  <div className={classes["anime__genre"]} key={index}>
                    {genre}
                  </div>
                )
            )}
          </div>
          <div className={classes["anime__arrow"]}>
            <BsArrowRightCircleFill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeItemBig;
