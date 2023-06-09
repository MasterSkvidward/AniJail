import React, {FC} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import { publicRoutes } from '../../utils/routes';
import HomePage from '../../pages/HomePage';
import Error from '../../pages/Error404';
import AnimeIdPage from '../../pages/AnimeIdPage';
import Anime from '../../pages/Anime';
import Profile from '../../pages/Profile';
import ProfileList from '../../pages/ProfileList';

const AppRouter:FC = () => {
    return (
        <Routes>
            <Route path={publicRoutes.HOMEPAGE} element={<HomePage/>}/>
            <Route path={publicRoutes.ERROR} element={<Error/>}/>
            {/* <Route path={publicRoutes.ANIME} element={<Anime/>}/> */}
            <Route path={`anime/:id`} element={<AnimeIdPage/>}/>
            <Route path={`users/:id`} element={<Profile/>}/>
            <Route path={`users/:id/watchlist`} element={<ProfileList/>}/>
            <Route path={publicRoutes.ANY} element={<Navigate to={publicRoutes.ERROR} replace/>}/>
        </Routes>
    );
}

export default AppRouter;