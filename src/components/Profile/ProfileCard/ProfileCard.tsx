import React, { FC, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { IUser } from "../../../store/reducers/auth/types";

import classes from "./ProfileCard.module.scss";
import ImageResponsive from "../../../UI/ImageResponsive/ImageResponsive";
import MyButton from "../../../UI/MyButton/MyButton";
import MyModal from "../../../UI/MyModal/MyModal";
import Score from "../../../UI/Score/Score";
import PersonItem from "../../PersonItem/PersonItem";

import Carousel from "../../../UI/Carousel/Carousel";
import { friendCarouseIOptionsLimited } from "../../../UI/Carousel/media-options";

import user2_image from "../../../assets/images/vacant_room_ch2-copy.jpg";

interface ProfileCardProps {
  currentUser: IUser;
}

const ProfileCard: FC<ProfileCardProps> = ({ currentUser }) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const navigate = useNavigate();

  const friends = [
    currentUser,
    currentUser,
    {
      id: 2,
      username: "Cuttie228",
      email: "Arthur1203@yandex.ru",
      image_url: user2_image,
      date_joined: "december 2019",
      last_login: "2 days ago",
    },
    currentUser,
    currentUser,
    {
      id: 3,
      username: "Marmelad1337",
      email: "Arthur1203@yandex.ru",
      image_url: user2_image,
      date_joined: "december 2019",
      last_login: "2 days ago",
    },
    currentUser,
    currentUser,
    currentUser,
    {
      id: 4,
      username: "Fruktozka",
      email: "Arthur1203@yandex.ru",
      image_url: user2_image,
      date_joined: "december 2019",
      last_login: "2 days ago",
    },
    currentUser,
    currentUser,
  ];

  return (
    <section className={classes["card"]}>
      <MyModal visible={modalVisible} setVisible={setModalVisible}>
        <ImageResponsive url={currentUser.image_url} />
      </MyModal>
      <div className={[classes["card__container"], "_container-main"].join(" ")}>
        <div className={classes["card__media"]}>
          {/* <div
            style={{
              background: `url(${currentUser.image_url}) 50% 0 / cover no-repeat`,
            }}
            className={classes["card__image"]}
            onClick={() => setModalVisible(true)}
          ></div> */}
          <div
            className={classes["card__image"]}
            onClick={() => setModalVisible(true)}
          >
            <img src={currentUser.image_url} alt="User" />
          </div>
        </div>
        <div className={classes["card__body"]}>
          <div className={classes["card__header"]}>
            <div className={classes["header__block"]}>
              <h4 className={classes["header__name"]}>
                {currentUser.username}
              </h4>
              <h6 className={classes["header__lastseen"]}>
                online {currentUser.last_login}
              </h6>
            </div>
            <div className={classes["header__btn"]}>
              <MyButton value="Изменить данные" />
            </div>
          </div>

          <div className={classes["card__inforow"]}>
            Member from <span>{currentUser.date_joined}</span>
          </div>

          <div className={classes["card__stats"]}>
            <div
              className={[classes["card__friends"], classes["friends"]].join(
                " "
              )}
            >
              <h5 className={classes["friends__title"]}>Друзья</h5>
              <div className={classes["friends__container"]}>
                {friends.length > 0 && (
                  <Carousel
                    options={
                      friends.length >= 5
                        ? friendCarouseIOptionsLimited
                        : {
                            ...friendCarouseIOptionsLimited,
                            drag: false,
                            arrows: false,
                            autoWidth: true,
                          }
                    }
                    arrowTop={40}
                  >
                    {friends.map((friend, index) => (
                      <div className={classes["friend"]} key={index}>
                        <div className={classes["friend__image"]}>
                          <img
                            src={friend.image_url || ""}
                            alt={friend.username || ""}
                          />
                        </div>
                        <span className={classes["friend__title"]}>
                          {friend.username || ""}
                        </span>
                      </div>
                    ))}
                  </Carousel>
                )}
              </div>
            </div>

            <div className={classes["card__list"]}>
              <div className={classes["card__score"]}>
                <span>Average score:</span>
                <Score score={7.53} />
              </div>
              <div
                className={classes["card__btn"]}
                onClick={() => navigate(`/users/${currentUser.id}/watchlist`)}
              >
                <MyButton value="Watchlist" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileCard;
