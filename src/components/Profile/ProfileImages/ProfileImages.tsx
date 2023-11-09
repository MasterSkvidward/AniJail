import React from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import DropZone from "../../../UI/DropZone/DropZone";
import classes from "./ProfileImages.module.scss";

import banner_img from "../../../assets/images/anime-voice.jpg";

const ProfileImages = () => {
    const {user} = useTypedSelector(state => state.auth)

   return (
      <div className={classes["images"]}>
         <div className={classes["avatar"]}>
            <h5 className={classes["images__title"]}>Avatar</h5>
            <p className={classes["images__label"]}>
               Allowed Formats: JPEG, PNG. Max size: 3mb. Optimal dimensions: 230x230
            </p>
            <div className={classes["avatar__body"]}>
               <DropZone />
               <div className={classes["avatar__img"]}>
                  <img src={user.image_url} alt="Avatar" />
               </div>
            </div>
         </div>

         <div className={classes["banner"]}>
            <h5 className={classes["images__title"]}>Banner</h5>
            <p className={classes["images__label"]}>
               Allowed Formats: JPEG, PNG. Max size: 6mb. Optimal dimensions: 1700x330
            </p>

            <div className={classes["banner__body"]}>
               <DropZone />
               <div className={classes["banner__img"]}>
                  <img src={banner_img} alt="Banner" />
               </div>
            </div>
         </div>
      </div>
   );
};

export default ProfileImages;
