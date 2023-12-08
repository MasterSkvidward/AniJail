import { FC } from "react";
import CommonTitle from "../../../UI/CommonTitle/CommonTitle";
import classes from "./ProfileGrid.module.scss";

interface ProfileGridProps {
   title: string;
   srcList: string[];
}

const ProfileGrid: FC<ProfileGridProps> = ({ title, srcList }) => {
   return (
      <div className={classes["block"]}>
         <CommonTitle value={title} />
         <div className={classes["block__grid"]}>
            {srcList.map((src, index) => (
               <div className={classes["block__image"]} key={index}>
                  <img src={src} alt="" />
               </div>
            ))}
         </div>
      </div>
   );
};

export default ProfileGrid;
