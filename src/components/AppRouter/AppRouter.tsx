import React, { FC } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { publicRoutes } from "./routes";
import HomePage from "../../pages/HomePage/HomePage";
import Error from "../../pages/404/404";
import AnimeIdPage from "../../pages/AnimeIdPage/AnimeIdPage";
import Anime from "../../pages/AnimePage/AnimePage";
import Profile from "../../pages/ProfilePage/ProfilePage";
import ProfileList from "../../pages/ProfileListPage/ProfileListPage";

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path={publicRoutes.HOMEPAGE} element={<HomePage />} />
      <Route path={publicRoutes.ERROR} element={<Error />} />
      <Route path={publicRoutes.ANIME} element={<Anime />} />
      <Route path={`/anime/:id`} element={<AnimeIdPage/>} />
      <Route path={`/users/:id`} element={<Profile />} />
      <Route path={`/users/:id/watchlist`} element={<ProfileList />} />
      <Route
        path={publicRoutes.ANY}
        element={<Navigate to={publicRoutes.ERROR} replace />}
      />
    </Routes>
  );
};

export default AppRouter;
