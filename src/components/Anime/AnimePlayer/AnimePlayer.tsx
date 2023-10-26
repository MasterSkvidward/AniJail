import React, { useState, useEffect } from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import Title from "../../../UI/Title/Title";
import { getAnimeEpisodeSrc } from "../../../utils/utils";

import classes from "./AnimePlayer.module.scss";

const AnimePlayer = () => {
   const { animeEpisode } = useTypedSelector((state) => state.anime);
   const [src, setSrc] = useState<string>("");

   const hostUrl = "https://goone.pro/streaming.php?";

   const setEpisodeSrc = (streamingUrl: string) => {
      const newSrc = getAnimeEpisodeSrc(hostUrl, streamingUrl);
      console.log(newSrc);

      setSrc(newSrc);
   };

   useEffect(() => {
      if (animeEpisode) setEpisodeSrc(animeEpisode.download);
   }, [animeEpisode]);

   // console.log(animeEpisodes[0]?.url && animeEpisodes[0].url);

   return (
      <div className={classes["player"]}>
         {/* {animeEpisodes[0]?.url &&
                <video width="700" height="400" src={animeEpisodes[0].url} title={animeEpisodes[0].title}></video>
            } */}
        <Title value="Watch anime"/>
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
   );
};

export default AnimePlayer;
