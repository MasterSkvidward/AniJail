import { FC } from "react";
import { Link } from "react-router-dom";
import { IUser } from "../../../store/reducers/auth/types";
import classes from "./ProfleFriend.module.scss";

interface ProfleFriendProps {
   user: IUser;
}

const ProfleFriend: FC<ProfleFriendProps> = ({ user }) => {
   return (
      <div className={classes["friend"]}>
         <Link to={`/user/${user.id}`}>
            <div className={classes["friend__image"]}>
               <img src={user.image_url} alt={user.username} title={user.username} />
            </div>
         </Link>

         <Link to={`/user/${user.id}`}>
            <p className={classes["friend__body"]}>{user.username}</p>
         </Link>
      </div>
   );
};

export default ProfleFriend;
