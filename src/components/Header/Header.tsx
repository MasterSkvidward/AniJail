import React, { FC } from 'react';
import Navbar from './Navbar';

import classes from '../../styles/Header.module.scss';


const Header:FC = () => {
    return (
       <header className={classes.header}>
           <Navbar/>
       </header>
    );
}

export default Header;