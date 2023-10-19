import React, { FC, MouseEvent } from "react";
import AnimeWatchList from "../../components/Anime/AnimeWatchList/AnimeWatchList";
import classes from "./ProfileListPage.module.scss";
import AnimeSearch from "../../components/Anime/AnimeSearch/AnimeSearch";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useNavigate } from "react-router-dom";

import { HiArrowLongLeft } from "react-icons/hi2";

interface ProfileListProps {}

const ProfileList: FC<ProfileListProps> = () => {
   const { user } = useTypedSelector((state) => state.auth);
   const navigate = useNavigate();

   const handlerClickBack = (e: MouseEvent): void => {
      navigate(`/users/${user.id}`);
   };

   return (
      <div className={classes["list"]}>
         <div className={"_container-main"}>
            <div className={classes["go-back"]}>
               <div className={classes["go-back__column"]} onClick={handlerClickBack}>
                  <span>
                     <HiArrowLongLeft />
                  </span>
                  <span>back</span>
               </div>
               <h4 className={classes["go-back__name"]} onClick={handlerClickBack}>
                  {user.username}
               </h4>
            </div>
            <AnimeSearch />
            <AnimeWatchList />
         </div>
      </div>
   );
};

export default ProfileList;
