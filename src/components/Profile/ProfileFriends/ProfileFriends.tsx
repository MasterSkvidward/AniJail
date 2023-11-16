import {useState} from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import classes from "./ProfileFriends.module.scss";

import ProfleFriend from "../ProfleFriend/ProfleFriend";

const ProfileFriends = () => {
   const { user } = useTypedSelector((state) => state.auth);

   const [activeLink, setActiveLink] = useState<string>("following");

   const friendsLinks = [
      { label: "Following", accessor: "following" },
      { label: "Followers", accessor: "followers" },
      { label: "Comments", accessor: "comments" },
   ];


   return (
      <div className={classes["friends"]}>
         <div className={[classes["friends__container"], "_container-main"].join(" ")}>
            <nav className={classes["friends__nav"]}>
               <ul className={classes["friends__links"]}>
                  {friendsLinks.map((link, index) => (
                     <li
                        className={
                           activeLink === link.accessor
                              ? [classes["friends__link"], classes["friends__link_active"]].join(" ")
                              : classes["friends__link"]
                        }
                        key={index}
                        onClick={() => setActiveLink(link.accessor)}
                     >
                        {link.label}
                     </li>
                  ))}
               </ul>
            </nav>
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
