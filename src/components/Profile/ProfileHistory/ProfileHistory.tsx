import React from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import CommonTitle from "../../../UI/CommonTitle/CommonTitle";
import ProfileHistoryItem from "../ProfileHistoryItem/ProfileHistoryItem";
import classes from "./ProfileHistory.module.scss";

const ProfileHistory = () => {
   const { anime } = useTypedSelector((state) => state.filter);

   return (
      <div className={classes["history"]}>
         <div className={[classes["history__container"], "_container-main"].join(" ")}>
            <CommonTitle value="History"/>
            <div className={classes["history__items"]}>
               {anime.map((item, index) => (
                  <ProfileHistoryItem anime={item} key={index} />
               ))}
            </div>
         </div>
      </div>
   );
};

export default ProfileHistory;
