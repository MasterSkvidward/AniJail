import React, { FC, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { IUser } from "../../store/reducers/auth/types";

import classes from "../../styles/ProfileCard.module.scss";
import ImageResponsive from "../../UI/ImageResponsive/ImageResponsive";
import MyButton from "../../UI/MyButton/MyButton";
import MyModal from "../../UI/MyModal/MyModal";
import Score from "../../UI/Score/Score";

interface ProfileCardProps {
  currentUser: IUser;
}

const ProfileCard: FC<ProfileCardProps> = ({ currentUser }) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const navigate = useNavigate();

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

  return (
    <section className={classes["card"]}>
      <MyModal visible={modalVisible} setVisible={setModalVisible}>
        <ImageResponsive url={currentUser.image_url} />
      </MyModal>
      <div className={[classes["card__container"], "_container1800"].join(" ")}>
        <div className={classes["card__media"]}>
          <div
            style={{
              background: `url(${currentUser.image_url}) 50% 0 / cover no-repeat`,
            }}
            className={classes["card__image"]}
            onClick={() => setModalVisible(true)}
          ></div>
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
                {friends.map((friend, index) => (
                  <div className={classes["friend"]}>
                    <div
                      style={{
                        background: `url(${currentUser.image_url}) 50% 0 / cover no-repeat`,
                      }}
                      className={classes["friend__image"]}
                    ></div>

                    <div className={classes["friend__name"]}></div>
                  </div>
                ))}
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
