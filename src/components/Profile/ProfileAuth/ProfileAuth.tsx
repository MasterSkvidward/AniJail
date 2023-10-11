import React, {
  useState,
  FC,
  Dispatch,
  SetStateAction,
  KeyboardEvent,
} from "react";
import classes from "./ProfileAuth.module.scss";
import LoginForm from "../../LoginForm/LoginForm";
import SignUpForm from "../../SignUpForm/SignUpForm";

interface ProfileAuthProps {
  setModalVisible: Dispatch<SetStateAction<boolean>>;
}

const ProfileAuth: FC<ProfileAuthProps> = ({ setModalVisible }) => {
  const [isNewUser, setIsNewUser] = useState(false);

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>): void => {
    if (e.code === "Escape") setModalVisible(false);
  };

  return (
    <div
      className={classes["profile"]}
      onMouseDown={(e) => e.stopPropagation()}
      onKeyDown={handleKeyDown}
    >
      <div className={classes["profile__img"]}>
        {isNewUser ? (
          <SignUpForm
            setIsNewUser={setIsNewUser}
            setModalVisible={setModalVisible}
          />
        ) : (
          <LoginForm
            setIsNewUser={setIsNewUser}
            setModalVisible={setModalVisible}
          />
        )}
      </div>
    </div>
  );
};

export default ProfileAuth;
