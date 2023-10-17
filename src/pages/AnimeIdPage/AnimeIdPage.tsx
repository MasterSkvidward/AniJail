import React, { useState, useEffect } from "react";
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
import AnimeFeedback from "../../components/Anime/AnimeFeedback/AnimeFeedback";

type ParamsType = {
   id: string;
};

const AnimeIdPage = () => {
   const dispatch = useDispatch();
   const params = useParams<ParamsType>();

   const fetchAnimeById = async () => {
      if (params.id !== "undefined" && params.id !== "null") {
         const id = Number(params.id);
         await dispatch(AnimeActionCreators.GetAnimeSingle(id));
         await dispatch(AnimeActionCreators.GetAnimeCharacters(id));
         await dispatch(AnimeActionCreators.GetAnimeSeason({ limit: 10 }));
         await dispatch(AnimeActionCreators.GetAnimeRecommendations(id));
         await dispatch(AnimeActionCreators.GetAnimeReviews(id));
      }
   };

   useEffect(() => {
      window.scrollTo(0, 0);
      fetchAnimeById();
   }, [params.id]);

   return (
      <div className={classes["anime-page"]}>
         <AnimeCard />
         <AnimeDetails />
         <AnimeFeedback />
      </div>
   );
};

export default AnimeIdPage;
