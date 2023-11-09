import React, { useEffect } from "react";

import classes from "./ProfilePage.module.scss";
import ProfileCard from "../../components/Profile/ProfileCard/ProfileCard";
import { Route, Routes, useParams } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import ProfileStatistics from "../../components/Profile/ProfileStatistics/ProfileStatistics";
import AnimeCard from "../../components/Anime/AnimeCard/AnimeCard";
import ProfileOverview from "../../components/Profile/ProfileOverview/ProfileOverview";
import ProfileReviews from "../../components/Profile/ProfileReviews/ProfileReviews";
import ProfileStats from "../../components/Profile/ProfileStats/ProfileStats";
import ProfileList from "../../components/Profile/ProfileList/ProfileList";
import { FilterActionCreators } from "../../store/reducers/filter/action-creatores";
import { useDispatch } from "react-redux";
import ProfileHistory from "../../components/Profile/ProfileHistory/ProfileHistory";
import ProfileSettings from "../../components/Profile/ProfileSettings/ProfileSettings";

type ParamsType = {
   id: string;
};

const Profile = () => {
//    const params = useParams<ParamsType>();
   const { user } = useTypedSelector((state) => state.auth);
   const { params } = useTypedSelector((state) => state.filter);
   const dispatch = useDispatch();

   const fetchAnimeTest = async () => {
    await dispatch(FilterActionCreators.setAnime(params));
   }

   useEffect(() => {
      window.scrollTo(0, 0);
      fetchAnimeTest();
    
   }, []);

   return (
      <div className={classes["profile"]}>
         <ProfileCard currentUser={user} />

         <Routes>
            <Route path="/" element={<ProfileOverview />} />
            <Route path="/watchlist" element={<ProfileList />} />
            <Route path="/activity" element={<ProfileHistory />} />
            <Route path="/stats" element={<ProfileStats />} />
            <Route path="/reviews" element={<ProfileReviews />} />
            <Route path="/settings" element={<ProfileSettings />} />
         </Routes>

         {/* <ProfileStatistics currentUser={user} /> */}
      </div>
   );
};

export default Profile;
