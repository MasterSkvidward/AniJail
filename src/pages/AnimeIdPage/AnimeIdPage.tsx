import React, { useState, useEffect, useLayoutEffect } from "react";
import classes from "./AnimeIdPage.module.scss";
import AnimeCard from "../../components/Anime/AnimeCard/AnimeCard";

import { useParams } from "react-router-dom";
import { AnimeService } from "../../services/AnimeService";
import { IAnime, IAnimeFull, IAnimePicture } from "../../types/jikanMoe/jikan";
import AnimeDetails from "../../components/Anime/AnimeDetails/AnimeDetails";
import { useFetching } from "../../hooks/useFetching";
import { ISingleAnime } from "../../types/anime/anime-single";

type ParamsType = {
  id: string;
};

const AnimeIdPage = () => {
  const params = useParams<ParamsType>();

  const [anime, setAnime] = useState<IAnimeFull | null>(null);
  const [animePictures, setAnimePictures] = useState<IAnimePicture[] | []>([]);
  const [similarAnime, setSimilarAnime] = useState<IAnime[]>([]);

  const fetchAnimePictures = async () => {
    const response = await AnimeService.getAnimePictures(params.id);
    setAnimePictures(response);
  };

  const fetchSimilar = async () => {
    const response = await AnimeService.getAnimeSeasonNow();
    setSimilarAnime(response);
  };

  const [fetchAnime, animeIsLoading, animesError] = useFetching(async () => {
    const response = await AnimeService.getAnimeById(params.id);
    setAnime(response);
  });

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    fetchAnime();
    fetchAnimePictures();
    fetchSimilar();
  }, [params]);

  if (animeIsLoading) return <></>;

  return (
    <div className={classes["anime-page"]}>
      <AnimeCard anime={anime} />
      <AnimeDetails
        similarAnime={similarAnime}
        anime={anime}
        animePictures={animePictures}
      />
    </div>
  );
};

export default AnimeIdPage;
