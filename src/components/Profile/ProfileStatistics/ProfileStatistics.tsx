import React, { FC, useState } from "react";
import { IUser } from "../../../store/reducers/auth/types";

import classes from "./ProfileStatistics.module.scss";
import ImageResponsive from "../../../UI/ImageResponsive/ImageResponsive";
import MyModal from "../../../UI/MyModal/MyModal";
import ReviewCarousel from "../../Review/ReviewCarousel/ReviewCarousel";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

interface ProfileStatisticsProps {
   currentUser: IUser;
}

const ProfileStatistics: FC<ProfileStatisticsProps> = ({ currentUser }) => {
   const [modalVisible, setModalVisible] = useState<boolean>(false);

   const {animeReviews} = useTypedSelector(state => state.anime);

   const friends = [
      currentUser,
      currentUser,
      currentUser,
      currentUser,
      currentUser,
      currentUser,
      currentUser,
      currentUser,
      currentUser,
      currentUser,
      currentUser,
      currentUser,
      currentUser,
      currentUser,
      currentUser,
   ];
   const progressBarWidth: number = 53;

   return (
      <section className={classes["statistics"]}>
         <MyModal visible={modalVisible} setVisible={setModalVisible}>
            <ImageResponsive url={currentUser.image_url} />
         </MyModal>
         <div className={[classes["statistics__container"], "_container-main"].join(" ")}>
            <div className={classes["statistics__time"]}>
               <div className={classes["statistics__title"]}>
                  <h5>Время за аниме</h5>
                  <h5>{"3 months 2 days"}</h5>
               </div>
               <div className={classes["statistics__block"]}>
                  <div className={classes["statistics__progressbar-container"]}>
                     <div style={{ maxWidth: `${progressBarWidth}%` }} className={classes["statistics__progressbar"]}></div>
                  </div>

                  <div className={classes["statistics__labels"]}>
                     <div className={classes["statistics__label"]}>
                        <span>2 weeks</span>
                     </div>
                     <div className={classes["statistics__label"]}>
                        <span>1 month</span>
                     </div>
                     <div className={classes["statistics__label"]}>
                        <span>3 months</span>
                     </div>
                     <div className={classes["statistics__label"]}>
                        <span>6 months</span>
                     </div>
                     {/* <span>1 month</span>
                            <span>3 months</span>
                            <span>6 months</span> */}
                  </div>
               </div>
            </div>
            <div className={classes["statistics__reviews"]}>
                <ReviewCarousel reviews={animeReviews}/>
            </div>
 
         </div>
      </section>
   );
};

export default ProfileStatistics;
