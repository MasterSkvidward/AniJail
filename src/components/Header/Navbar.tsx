import React, { FC, MouseEvent, useState} from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import classes from '../../styles/Navbar.module.scss';
import { publicRoutes } from '../../utils/routes';
import SearchBar from '../../UI/SearchBar/SearchBar';

import site_logo from '../../images/AniJail_logo.png';
import profile_logo from '../../images/profile_logo.jpg';
import { navbarLinks } from '../../utils/data';


const Navbar:FC = () => {
    const navigate = useNavigate();
    const [selectedNumber, setSelectedNumber] = useState<number>(-1);
  

    const handleClick = (event:MouseEvent<HTMLLIElement>):void => {
        setSelectedNumber(Number(event.currentTarget.dataset.index))
        navigate(String(event.currentTarget.dataset.path))
    }

    return (
       <nav className={[classes.navbar, '_container1800'].join(' ')}>
            {/* <div ></div> */}
            <div className={classes.navbar__logo} onClick={() => {navigate(publicRoutes.HOMEPAGE); setSelectedNumber(-1)}}>
                <img src={site_logo} alt="AniJail"/>
            </div>

            <ul className={classes.navbar__links}>
                {navbarLinks.map((link, index) =>
                    <li className={index===selectedNumber? [classes.navbar__link, classes.active].join(" "): classes.navbar__link} 
                        data-index={index}
                        data-path={link.path}
                        onClick={handleClick}
                        key={index}
                        >{link.value}
                    </li>
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