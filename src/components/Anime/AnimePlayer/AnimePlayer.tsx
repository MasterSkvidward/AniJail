import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { AnimeActionCreators } from "../../../store/reducers/anime/action-creatores";
import Title from "../../../UI/Title/Title";
import { getAnimeEpisodeSrc } from "../../../utils/utils";
import { getAnimeEpisodeUrl } from "../../../utils/utils";
import classes from "./AnimePlayer.module.scss";

const AnimePlayer = () => {
   const { animeEpisode } = useTypedSelector((state) => state.anime);
   const [src, setSrc] = useState<string>("");

   const { animeSingle } = useTypedSelector((state) => state.anime);
   const dispatch = useDispatch();

   const hostUrl = "https://goone.pro/streaming.php?";

   const setEpisodeSrc = (streamingUrl: string) => {
      const newSrc = getAnimeEpisodeSrc(hostUrl, streamingUrl);
      console.log(newSrc);

      setSrc(newSrc);
   };

   const api_url = "https://api.consumet.org/anime/gogoanime/watch/";

   const fetchAnimeEpisode = async (title: string) => {
      const url = getAnimeEpisodeUrl(api_url, title, 1);
      await dispatch(AnimeActionCreators.GetAnimeEpisode(url));
   };

   useEffect(() => {
      if (animeSingle) {
         console.log(animeSingle);

         fetchAnimeEpisode(animeSingle.title || animeSingle?.title_english);
      }
   }, [animeSingle]);

   useEffect(() => {
      if (animeEpisode) setEpisodeSrc(animeEpisode.download);
   }, [animeEpisode]);

   // console.log(animeEpisodes[0]?.url && animeEpisodes[0].url);

   return (
      <div className={classes["player"]}>
         <div className={[classes["player__container"], "_container-main"].join(" ")}>
            {/* {animeEpisodes[0]?.url &&
                <video width="700" height="400" src={animeEpisodes[0].url} title={animeEpisodes[0].title}></video>
            } */}
            <Title value="Watch anime" />
            <iframe
               src={src}
               width={900}
               height={540}
               allowFullScreen
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
               title="Anime player"
               //    "https://goone.pro/streaming.php?id=MjEzMDA4&title=Spy+x+Family+Season+2+Episode+1&typesub=SUB"
            ></iframe>
         </div>
      </div>
   );
};

export default AnimePlayer;
