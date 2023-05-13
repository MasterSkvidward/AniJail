import React, { FC, MouseEvent, useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import classes from '../../styles/Navbar.module.scss';
import { publicRoutes } from '../../utils/routes';
import SearchBar from '../../UI/SearchBar/SearchBar';
import site_logo from '../../images/AniJail_logo.png';
import { navbarLinks } from '../../utils/data';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import MyModal from '../../UI/MyModal/MyModal';
import { useDispatch } from 'react-redux';
import { AuthActionCreators } from '../../store/reducers/auth/action-creatores';
import ProfileAuth from '../Profile/ProfileAuth';
import {TbSettings} from 'react-icons/tb';
import {RiLogoutBoxRLine} from 'react-icons/ri';
import {HiOutlineEye} from 'react-icons/hi';
import {CgProfile} from 'react-icons/cg';


const Navbar:FC = () => {
    const navigate = useNavigate();
    const [selectedNumber, setSelectedNumber] = useState<number>(-1);
    const [modalVisible, setModalVisible] = useState(false);
    const [menuVisible, setMenuVisible] = useState(false);

    const dispatch = useDispatch();
    const {isAuth, user} = useTypedSelector(state => state.auth);
  

    const handleClick = (event:MouseEvent<HTMLLIElement>):void => {
        setSelectedNumber(Number(event.currentTarget.dataset.index))
        navigate(String(event.currentTarget.dataset.path))
    }

    const handlerLoginClick = (e:MouseEvent<HTMLDivElement>) => {
        setModalVisible(true);
        e.stopPropagation();
    }

    const handlerProfileClick = (e:MouseEvent<HTMLDivElement>) => {
        setMenuVisible(!menuVisible);
        e.stopPropagation();
    }

    const handlerDocumentClick = (e: Event):void => {
        setMenuVisible(false);
    }

    const handlerLogout = (e: MouseEvent) => {
        dispatch(AuthActionCreators.setAuth(false));
    }

    const handlerOptionsClick = (e: MouseEvent, url:string) => {
        setMenuVisible(false);
        navigate(url);
    }

    useEffect(() => {
        document.addEventListener('click', handlerDocumentClick);
        return () => document.removeEventListener("click",  handlerDocumentClick);
    }, [])

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

            <div className={classes.profile}>
                {isAuth 
                    ?   
                        <div className={classes['profile__img']} onClick={handlerProfileClick}>
                            <img src={user.image_url} alt="Profile" />
                            <div className={ menuVisible? [classes['profile__menu'], classes['visible']].join(' ') :  classes['profile__menu']} onClick={(e => e.stopPropagation())}>
                                <div className={classes['profile__user']} onClick={(e) => handlerOptionsClick(e, `/users/${user.id}`)}>
                                    <h3 className={classes['profile__username']}>{user.username}</h3>
                                    <h3 className={classes['profile__email']}>{user.email}</h3>
                                </div>
                                
                                <ul className={classes['menu']}>
                                    <li className={classes['menu__item']} onClick={(e) => handlerOptionsClick(e, `/users/${user.id}`)}><span><CgProfile/></span>Profile</li>
                                    <li className={classes['menu__item']} onClick={(e) => handlerOptionsClick(e, `/users/${user.id}/watchlist`)}><span><HiOutlineEye/></span>Watchlist</li>
                                    <li className={classes['menu__item']}><span><TbSettings/></span>Settings</li>
                                    <li className={classes['menu__item']} onClick={handlerLogout}><span><RiLogoutBoxRLine/></span>Logout</li>
                                </ul>
                            </div>
                        </div>
                    :
                        <>
                            <MyModal visible={modalVisible} setVisible={setModalVisible}>
                                <ProfileAuth setModalVisible={setModalVisible}/>
                            </MyModal>
                            <div className={classes['profile__login']} onClick={handlerLoginClick}>
                                Login
                            </div>
                        </>
                }
                
            </div>
       </nav>
    );
}

export default Navbar;