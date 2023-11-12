import React, { FC } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { publicRoutes } from "./routes";
import HomePage from "../../pages/HomePage/HomePage";
import AnimeIdPage from "../../pages/AnimeIdPage/AnimeIdPage";
import Anime from "../../pages/AnimePage/AnimePage";
import Profile from "../../pages/ProfilePage/ProfilePage";
import AnimeTopPage from "../../pages/AnimeTopPage/AnimeTopPage";
import AnimePage from "../../pages/AnimePage/AnimePage";
import Error404Page from "../../pages/Error404Page/Error404Page";
import ProfilePage from "../../pages/ProfilePage/ProfilePage";

const AppRouter: FC = () => {
   return (
      <Routes>
         <Route path={publicRoutes.HOMEPAGE} element={<HomePage />} />
         <Route path={publicRoutes.ERROR} element={<Error404Page />} />
         <Route path={publicRoutes.ANIME} element={<AnimePage />} />
         <Route path={publicRoutes.ANIME_TOP} element={<AnimeTopPage />} />
         <Route path={`/anime/:id`} element={<AnimeIdPage />} />
         <Route path={`/user/*`} element={<ProfilePage />}/>
         <Route path={`/user/:id/*`} element={<ProfilePage />}/>
         {/* <Route path={`/users/:id/watchlist`} element={<ProfileList />} /> */}
         <Route path={publicRoutes.ANY} element={<Navigate to={publicRoutes.ERROR} replace />} />
      </Routes>
   );
};

export default AppRouter;
