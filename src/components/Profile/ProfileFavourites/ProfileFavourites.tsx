import React from 'react';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import ProfileGrid from '../ProfileGrid/ProfileGrid';
import classes from "./ProfileFavourites.module.scss";

const ProfileFavourites = () => {
    const {anime} = useTypedSelector(state => state.filter)

    return (
       <div className={classes["favourites"]}>
           <div className={[classes["favourites__container"], "_container-main"].join(" ")}>
                <ProfileGrid title='Anime' srcList={anime.map((item) => item.images.jpg.image_url)}/>
                <ProfileGrid title='Characters' srcList={anime.map((item) => item.images.jpg.image_url)}/>
           </div>
       </div>
    );
}

export default ProfileFavourites;