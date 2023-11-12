import React from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import classes from "./ProfileFriends.module.scss";

import ProfleFriend from "../ProfleFriend/ProfleFriend";

const ProfileFriends = () => {
   const { user } = useTypedSelector((state) => state.auth);

   return (
      <div className={classes["friends"]}>
         <div className={[classes["friends__container"], "_container-main"].join(" ")}>
            <div className={classes["friends__sidebar"]}></div>
            <div className={classes["friends__grid"]}>
               {[...new Array(24)].map((item, index) => (
                  <ProfleFriend user={user} key={index} />
               ))}
            </div>
         </div>
      </div>
   );
};

export default ProfileFriends;
