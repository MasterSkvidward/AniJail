import React, {FC} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import { publicRoutes } from '../../utils/routes';
import HomePage from '../../pages/HomePage';
import Error from '../../pages/Error404';

const AppRouter:FC = () => {
    return (
        <Routes>
            <Route path={publicRoutes.HOMEPAGE} element={<HomePage/>}/>
            <Route path={publicRoutes.ERROR} element={<Error/>}/>
            <Route path={publicRoutes.ANY} element={<Navigate to={publicRoutes.ERROR} replace/>}/>
        </Routes>
    );
}

export default AppRouter;