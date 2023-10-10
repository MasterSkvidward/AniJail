import React, { useState, useEffect, useLayoutEffect } from "react";
import classes from "./AnimeIdPage.module.scss";
import AnimeCard from "../../components/Anime/AnimeCard/AnimeCard";

import { Navigate, useNavigate, useParams } from "react-router-dom";
import { AnimeService } from "../../services/AnimeService";
import { IAnime, IAnimeFull, IAnimePicture, IAnimeRecommendation } from "../../types/jikanMoe/jikan";
import AnimeDetails from "../../components/Anime/AnimeDetails/AnimeDetails";
import { useFetching } from "../../hooks/useFetching";
import { ISingleAnime } from "../../types/anime/anime-single";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { AnimeActionCreators } from "../../store/reducers/anime/action-creatores";

type ParamsType = {
  id: string;
};

const AnimeIdPage = () => {
const dispatch = useDispatch();
  const params = useParams<ParamsType>();

  const [anime, setAnime] = useState<IAnimeFull | null>(null);
//   const [animePictures, setAnimePictures] = useState<IAnimePicture[] | []>([]);


  const fetchSimilar = (id:string | undefined) => {
    dispatch(AnimeActionCreators.GetAnimeRecommendations(Number(id)));
    // setSimilarAnime(response);
  };

  const fetchSeasonAnime = (limit:number | undefined) => {
    dispatch(AnimeActionCreators.GetAnimeSeason({limit: Number(limit)}));
  };

  const [fetchAnime, animeIsLoading, animesError] = useFetching(async () => {
    const response = await AnimeService.getAnimeById(params.id);
    setAnime(response);
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchAnime();
    fetchSimilar(params.id);
    fetchSeasonAnime(10);
  }, []);

  if (animeIsLoading) return <></>;

  return (
    <div className={classes["anime-page"]}>
      <AnimeCard anime={anime} />
      <AnimeDetails
        anime={anime}
      />
    </div>
  );
};

export default AnimeIdPage;
