import React, { FC } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import classes from '../../styles/Navbar.module.scss';
import { ROUTES } from '../../utils/routes';

const Navbar:FC = () => {
    const navigate = useNavigate();

    return (
       <nav className={[classes.navbar, '_container'].join(' ')}>
            <div className={classes.navbar__logo} onClick={() => navigate(ROUTES.HOMEPAGE)}>
                <img src={''} alt="Chizaru"/>
            </div>
            <ul className={classes.navbar__links}>
                <li className={classes.navbar__link} onClick={() => navigate(ROUTES.ANY)}>Новинки</li>
                <li className={classes.navbar__link} onClick={() => navigate(ROUTES.ANY)}>Новинки</li>
                <li className={classes.navbar__link} onClick={() => navigate(ROUTES.ANY)}>Новинки</li>
            </ul>
       </nav>
    );
}

export default Navbar;