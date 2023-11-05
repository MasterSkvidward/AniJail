import React from "react";
import ProfileFilter from "../ProfileFilter/ProfileFilter";
import ProfileSort from "../ProfileSort/ProfileSort";
import classes from "./ProfileList.module.scss";

const ProfileList = () => {
   return (
      <div className={classes["watchlist"]}>
         <div className={[classes["watchlist__container"], "_container-main"].join(" ")}>
            <ProfileFilter />
            <ProfileSort />
         </div>
      </div>
   );
};

export default ProfileList;
