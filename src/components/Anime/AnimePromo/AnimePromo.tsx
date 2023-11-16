import React from 'react';
import classes from "./AnimePromo.module.scss";

import anime_img from "../../../assets/images/avatar.jpg";
import promo_img from "../../../assets/images/jujutsu-promo-1.jpg";

const AnimePromo = () => {
    return (
       <div className={classes["promo"]} style={{backgroundImage: `url(${promo_img})`}}>
           <div className={[classes["promo__container"], "_container-main"].join(" ")}>
                <div className={classes["promo__body"]}>
                    <h2 className={classes["promo__title"]}>Jujutsu Kaisen</h2>
                </div>
                <div className={classes["promo__img"]}>
                   <img src={promo_img} alt="Avatar" />
                </div>
           </div>
       </div>
    );
}

export default AnimePromo;