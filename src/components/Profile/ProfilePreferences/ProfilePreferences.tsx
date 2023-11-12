import React from "react";
import CommonTitle from "../../../UI/CommonTitle/CommonTitle";
import ThemePicker from "../../../UI/ThemePicker/ThemePicker";
import ProfileSwitches from "../ProfileSwitches/ProfileSwitches";
import classes from "./ProfilePreferences.module.scss";

const ProfilePreferences = () => {
   return (
      <div className={classes["preferences"]}>
         <div className={classes["preferences__colors"]}>
            <CommonTitle value="Site main color" />
            <ThemePicker />
         </div>

         <ProfileSwitches />
      </div>
   );
};

export default ProfilePreferences;
