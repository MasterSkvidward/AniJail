import React, { useEffect, useState, MouseEvent } from "react";
import classes from "./AnimeList.module.scss";
import AnimeItem from "../AnimeItem/AnimeItem";
import { AnimeService } from "../../../services/AnimeService";
import { useFetching } from "../../../hooks/useFetching";
import { IAnime } from "../../../types/jikanMoe/jikan";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

const AnimeList = () => {
  const { anime, isLoading } = useTypedSelector((state) => state.filter);
  const [previewIsVisible, setPreviewIsVisible] = useState(false);

  if (!anime.length && !isLoading)
    return <div className={classes["empty"]}>No Results.</div>;

  return (
    <div className={classes["anime-list"]}>
      <div className={classes["anime-list__grid"]}>
        {anime.map((item, index) => (
        //   <div className={classes["anime-list__item"]} key={index}>
            <AnimeItem anime={item} showPreview={true} key={index}/>
        //   </div>
        ))}
      </div>
    </div>
  );
};

export default AnimeList;
