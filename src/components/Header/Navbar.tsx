import React, { FC, MouseEvent, useState} from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import classes from '../../styles/Navbar.module.scss';
import { publicRoutes } from '../../utils/routes';
import SearchBar from '../../UI/SearchBar/SearchBar';

import site_logo from '../../images/AniJail_logo.png';
import profile_logo from '../../images/profile_logo.jpg';

const Navbar:FC = () => {
    const navigate = useNavigate();
    const [selectedNumber, setSelectedNumber] = useState<number>(-1);
    const links: {value: string, path: string}[] = [
        {value: 'Top 100', path: publicRoutes.ANY},
        {value: 'New', path: publicRoutes.ANY},
        {value: 'Random anime', path: publicRoutes.ANY},
    ]

    const handleClick = (event:MouseEvent<HTMLLIElement>):void => {
        setSelectedNumber(Number(event.currentTarget.dataset.index))
        navigate(String(event.currentTarget.dataset.path))
    }

    return (
       <nav className={[classes.navbar, '_container'].join(' ')}>
            <div ></div>
            <div className={classes.navbar__logo} onClick={() => navigate(publicRoutes.HOMEPAGE)}>
                <img src={site_logo} alt="AniJail"/>
            </div>

            <ul className={classes.navbar__links}>
                {links.map((link, index) =>
                    <li data-index={index} data-path={link.path} className={index===selectedNumber? [classes.navbar__link, classes.active].join(" "): classes.navbar__link} onClick={handleClick}>{link.value}</li>
                )}
            </ul>

            <div className={classes.navbar__search}>
                <SearchBar/>
            </div>

            <div className={classes.navbar__profile}>
                <img src={profile_logo} alt="Profile" />
            </div>
       </nav>
    );
}

export default Navbar;