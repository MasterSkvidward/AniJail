import React from 'react';
import classes from "./AnimePromo.module.scss";

import anime_img from "../../../assets/images/avatar.jpg";

const AnimePromo = () => {
    return (
       <div className={classes["promo"]} style={{backgroundImage: `url(${anime_img})`}}>
           <div className={classes["promo__container"]}>
                <div className={classes["promo__body"]}>
                    <h2 className={classes["promo__title"]}>Attack on Titan</h2>
                </div>
                <div className={classes["promo__img"]}>
                   <img src={anime_img} alt="Avatar" />
                </div>
           </div>
       </div>
    );
}

export default AnimePromo;