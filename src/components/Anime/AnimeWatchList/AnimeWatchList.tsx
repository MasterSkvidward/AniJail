import {FC} from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import classes from "./AnimeWatchList.module.scss";
import AnimeItemSmall from "../AnimeItemSmall/AnimeItemSmall";
import MyTable from "../../../UI/MyTable/MyTable";
import * as CONSTANTS from "./constants";
import AnimeList from "../AnimeList/AnimeList";
import AnimeListGrid from "../AnimeListGrid/AnimeListGrid";

interface AnimeWatchListProps {
    view: string
}

const AnimeWatchList:FC<AnimeWatchListProps> = ({view}) => {
   const { anime } = useTypedSelector((state) => state.filter);

   return (
      <div className={classes["watchlist"]}>
        {view === "table" && <MyTable headlines={CONSTANTS.watchListHeadlines} data={anime} />}
        {view === "grid" && <AnimeListGrid/>}
        
         {/* <AnimeList /> */}
      </div>
   );
};

export default AnimeWatchList;
