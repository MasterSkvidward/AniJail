import React, { FC, useState } from "react";
import { Link, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { IUser } from "../../../store/reducers/auth/types";

import classes from "./ProfileCard.module.scss";
import ImageResponsive from "../../../UI/ImageResponsive/ImageResponsive";
import MyButton from "../../../UI/MyButton/MyButton";
import MyModal from "../../../UI/MyModal/MyModal";
import Score from "../../../UI/Score/Score";

import Carousel from "../../../UI/Carousel/Carousel";
import { friendCarouseIOptionsLimited } from "../../../UI/Carousel/media-options";

import user2_image from "../../../assets/images/vacant_room_ch2-copy.jpg";
import background_img2 from "../../../assets/images/anime-voice.jpg";

import background_img from "../../../assets/images/igris-solo-leveling.jpg";
import ProfileStatistics from "../ProfileStatistics/ProfileStatistics";
import ProfileNavigation from "../ProfileNavigation/ProfileNavigation";

interface ProfileCardProps {
   currentUser: IUser;
}

const ProfileCard: FC<ProfileCardProps> = ({ currentUser }) => {
   const [modalVisible, setModalVisible] = useState<boolean>(false);
   const navigate = useNavigate();

   const backgroundImgStyle = {
      background: `linear-gradient(to bottom, transparent 0%, rgba(20, 20, 20, 0.7) 100%), url(${background_img2}) center 60% / cover`,
      //   backgroundImage: `url(${background_img})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center 60%",
   };

   //    const friends = [
   //       currentUser,
   //       currentUser,
   //       {
   //          id: 2,
   //          username: "Cuttie228",
   //          email: "Arthur1203@yandex.ru",
   //          image_url: user2_image,
   //          date_joined: "december 2019",
   //          last_login: "2 days ago",
   //       },
   //       currentUser,
   //       currentUser,
   //       {
   //          id: 3,
   //          username: "Marmelad1337",
   //          email: "Arthur1203@yandex.ru",
   //          image_url: user2_image,
   //          date_joined: "december 2019",
   //          last_login: "2 days ago",
   //       },
   //       currentUser,
   //       currentUser,
   //       currentUser,
   //       {
   //          id: 4,
   //          username: "Fruktozka",
   //          email: "Arthur1203@yandex.ru",
   //          image_url: user2_image,
   //          date_joined: "december 2019",
   //          last_login: "2 days ago",
   //       },
   //       currentUser,
   //       currentUser,
   //    ];

   return (
      <section className={classes["profile"]}>
         <MyModal visible={modalVisible} setVisible={setModalVisible}>
            <ImageResponsive url={currentUser.image_url} />
         </MyModal>
         <div className={classes["profile__media"]} style={backgroundImgStyle}>
            <div className={[classes["profile__container-block"], "_container-main"].join(" ")}>
               <div className={classes["profile__block"]}>
                  <div className={classes["profile__image"]} onClick={() => setModalVisible(true)}>
                     <img src={currentUser.image_url} alt="User" />
                  </div>

                  <h4 className={classes["profile__username"]}>{currentUser.username}</h4>
                  <button className={classes["profile__btn"]}>Follow</button>
               </div>
            </div>
         </div>
         <ProfileNavigation />
      </section>
   );
};

export default ProfileCard;
