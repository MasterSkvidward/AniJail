import React from 'react';
import classes from './Footer.module.scss';
import footer_image from "../../assets/images/footer_girl.png";

const Footer = () => {
    return (
       <footer className={classes['footer']}>
           <div className='_container1800'>
                <div className={classes['footer__body']}>
                    <div className={classes['footer__column']}>
                        <h3 className={classes['footer__brandname']}>AnimeJail</h3>
                        <h4 className={classes['footer__info']}>Track anime Online</h4>
                        <h4 className={classes['footer__copyright']}>Copyright ©AnimeJail. All Rights Reserved</h4>
                    </div>
                    <div className={classes['footer__contacts']}>
                        <h3 className={classes['footer__label']}>Contacts</h3>
                        <ul className={classes['footer__links']}>
                            <li className={classes['footer__link']}>1. Github</li>
                            <li className={classes['footer__link']}>2. VK</li>
                            {/* <li className={classes['footer__link']}>3. ?</li>
                            <li className={classes['footer__link']}>4. ?</li> */}
                        </ul>
                    </div>
                    <div className={classes['footer__image']}>
                        <img src={footer_image} alt="" height={110}/>
                    </div>
                </div>
           </div>
       </footer>
    );
}

export default Footer;