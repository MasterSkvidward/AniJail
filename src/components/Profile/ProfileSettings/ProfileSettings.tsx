import React from "react";
import ProfileForm from "../ProfileForm/ProfileForm";
import ProfileImages from "../ProfileImages/ProfileImages";
import classes from "./ProfileSettings.module.scss";

const ProfileSettings = () => {
   return (
      <div className={classes["settings"]}>
         <div className={[classes["settings__container"], "_container-main"].join(" ")}>
            <ProfileImages />
            <ProfileForm />
         </div>
      </div>
   );
};

export default ProfileSettings;
