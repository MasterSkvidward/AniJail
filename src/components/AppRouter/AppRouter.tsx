import React, {FC} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import { ROUTES } from '../../utils/routes';
import HomePage from '../../pages/HomePage';
import Error from '../../pages/Error404';

const AppRouter:FC = () => {
    return (
        <Routes>
            <Route path={ROUTES.HOMEPAGE} element={<HomePage/>}/>
            <Route path={ROUTES.ERROR} element={<Error/>}/>
            <Route path={ROUTES.ANY} element={<Navigate to={ROUTES.ERROR} replace/>}/>
        </Routes>
    );
}

export default AppRouter;