import React from "react";
import { Link } from "react-router-dom";
import classes from "./ProfileNavigation.module.scss";

const ProfileNavigation = () => {
   const profileLinks = [
      { title: "Overview", path: "/user/1" },
      { title: "AnimeList", path: "/user/1/watchlist" },
      { title: "Activity", path: "/user/1/activity" },
      { title: "Stats", path: "/user/1/stats" },
      { title: "Friends", path: "/user/1/friends" },
      { title: "Reviews", path: "/user/1/reviews" },
   ];

   return (
      <nav className={classes["navbar"]}>
         <div className={[classes["navbar__container"], "_container-main"].join(" ")}>
            <ul className={classes["navbar__links"]}>
               {profileLinks.map((link, index) => (
                  <li
                     className={
                        link.path === window.location.pathname
                           ? [classes["navbar__link"], classes["navbar__link_active"]].join(" ")
                           : classes["navbar__link"]
                     }
                     key={index}
                  >
                     <Link to={link.path}>{link.title}</Link>
                  </li>
               ))}
            </ul>
         </div>
      </nav>
   );
};

export default ProfileNavigation;
