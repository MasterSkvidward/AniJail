import { FC, useEffect, useState, MouseEvent } from "react";
import classes from "./AnimeList.module.scss";
import AnimeItem from "../AnimeItem/AnimeItem";
import { AnimeService } from "../../../services/AnimeService";
import { useFetching } from "../../../hooks/useFetching";
import { IAnime } from "../../../types/jikanMoe/jikan";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import ContentLoader from "react-content-loader";
import AnimeItemSmall from "../AnimeItemSmall/AnimeItemSmall";

interface AnimeListProps {
   view: string;
}

const AnimeList: FC<AnimeListProps> = ({ view }) => {
   const { anime, isLoading, error, hasMoreAnime } = useTypedSelector((state) => state.filter);
   const [previewIsVisible, setPreviewIsVisible] = useState(false);

   if (!anime.length && !isLoading && !error && !hasMoreAnime) return <div className={classes["empty"]}>No Results.</div>;

   return (
      <div className={classes["wrapper"]}>
         {view === "grid" && (
            <div className={classes["anime-grid"]}>
               {anime.length > 0
                  ? anime.map((item, index) => (
                       //    <div className={classes["anime-list__item"]} key={index}>
                       <AnimeItem anime={item} showPreview={false} key={index} />
                       //    </div>
                    ))
                  : [...new Array(24)].map((item, index) => <AnimeItem anime={null} showPreview={false} key={index} />)}
            </div>
         )}

         {view === "column" && (
            <div className={classes["anime-column"]}>
               {anime.length > 0
                  ? anime.map((item, index) => (
                       //    <div className={classes["anime-list__item"]} key={index}>
                       <AnimeItemSmall anime={item}  key={index} />
                       //    </div>
                    ))
                  : [...new Array(24)].map((item, index) => <AnimeItem anime={null} showPreview={false} key={index} />)}
            </div>
         )}
      </div>
   );
};

export default AnimeList;
