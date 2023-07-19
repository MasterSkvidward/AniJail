import React, { FC, useEffect, useRef } from 'react';
import Navbar from '../Navbar/Navbar';

import classes from './Header.module.scss';


const Header:FC = () => {
    const header = useRef<HTMLHeadElement>(null);

    const handleScroll = () => {
        if (window.pageYOffset > 180) {
            header.current?.classList.add(classes.sticky);
        } else if (window.pageYOffset === 0) header.current?.classList.remove(classes.sticky);
    }

    useEffect(() => {
        document.addEventListener('scroll', handleScroll);
    }, [])
    

    return (
       <header ref={header} className={classes.header}>
           <Navbar/>
       </header>
    );
}

export default Header;