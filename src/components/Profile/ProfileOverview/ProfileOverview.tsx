import React from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import ActivityGrid from "../../../UI/ActivityGrid/ActivityGrid";
import CommonTitle from "../../../UI/CommonTitle/CommonTitle";
import ProfileGrid from "../ProfileGrid/ProfileGrid";
import ProfileHistory from "../ProfileHistory/ProfileHistory";
import ProfileHistoryItem from "../ProfileHistoryItem/ProfileHistoryItem";
import ProfileStatistics from "../ProfileStatistics/ProfileStatistics";
import ProfileStats from "../ProfileStats/ProfileStats";
import classes from "./ProfileOverview.module.scss";

const ProfileOverview = () => {
   const { user } = useTypedSelector((state) => state.auth);
   const { anime } = useTypedSelector((state) => state.filter);

   return (
      <div className={classes["overview"]}>
         <div className={[classes["overview__container"], "_container-main"].join(" ")}>
            <div className={classes["overview__column"]}>
               <div className={classes["overview__description"]}>
                  <CommonTitle value="About me" />
                  <p>{user.about || ""}</p>
               </div>

               <div className={classes["overview__activity"]}>
                  <CommonTitle value="Activity" />
                  <ActivityGrid />
               </div>

               <div>
                  <ProfileGrid title="Characters" srcList={anime.map((item) => item.images.jpg.image_url)} />
               </div>
            </div>

            <div className={classes["overview__history"]}>
               <CommonTitle value="Activity History" isLink={true} />
               <div className={classes["overview__history-list"]}>
                  {anime.slice(0, 6).map((item, index) => (
                     <ProfileHistoryItem anime={item} key={index} />
                  ))}
               </div>
            </div>

            {/* <div className={classes["overview__activity"]}>
                    <p>{user.about || ""}</p>
                </div> */}
         </div>

         {/* <ProfileStatistics currentUser={user}/> */}
      </div>
   );
};

export default ProfileOverview;
