import React, { useEffect } from "react";

import classes from "./ProfilePage.module.scss";
import ProfileCard from "../../components/Profile/ProfileCard/ProfileCard";
import { Route, Routes, useParams } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import ProfileStatistics from "../../components/Profile/ProfileStatistics/ProfileStatistics";
import ProfileList from "../ProfileListPage/ProfileListPage";
import AnimeCard from "../../components/Anime/AnimeCard/AnimeCard";
import ProfileOverview from "../../components/Profile/ProfileOverview/ProfileOverview";

type ParamsType = {
   id: string;
};

const Profile = () => {
   const params = useParams<ParamsType>();
   const { user } = useTypedSelector((state) => state.auth);

   useEffect(() => {
      // window.scrollTo(0, 0);
   }, []);

   return (
      <div className={classes["profile"]}>
         <ProfileCard currentUser={user} />

         <Routes>
            <Route path="/" element={<ProfileOverview />} />
            <Route path="/watchlist" element={<ProfileList />} />
         </Routes>

         {/* <ProfileStatistics currentUser={user} /> */}
      </div>
   );
};

export default Profile;
