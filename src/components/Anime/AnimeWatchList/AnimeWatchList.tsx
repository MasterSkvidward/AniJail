import React from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import classes from "./AnimeWatchList.module.scss";
import AnimeItemSmall from "../AnimeItemSmall/AnimeItemSmall";
import MyTable from "../../../UI/MyTable/MyTable";
import * as CONSTANTS from "./constants";
import AnimeList from "../AnimeList/AnimeList";

const AnimeWatchList = () => {
   const { anime } = useTypedSelector((state) => state.filter);

   return (
      <div className={classes["watchlist"]}>
         <MyTable headlines={CONSTANTS.watchListHeadlines} data={anime} />
         {/* <AnimeList /> */}
      </div>
   );
};

export default AnimeWatchList;
