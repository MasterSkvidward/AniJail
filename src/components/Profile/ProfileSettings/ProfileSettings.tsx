import { useState, MouseEvent } from "react";
import ProfileForm from "../ProfileForm/ProfileForm";
import ProfileImages from "../ProfileImages/ProfileImages";
import ProfilePreferences from "../ProfilePreferences/ProfilePreferences";
import classes from "./ProfileSettings.module.scss";

const ProfileSettings = () => {
   const [activeLink, setActiveLink] = useState<string>("account");

   const settingsLinks = [
      { label: "Account", accessor: "account" },
      { label: "Preferences", accessor: "preferences" },
      { label: "Images", accessor: "images" },
   ];

   return (
      <div className={classes["settings"]}>
         <div className={[classes["settings__container"], "_container-main"].join(" ")}>
            <div className={classes["settings__content"]}>
               <nav className={classes["settings__nav"]}>
                  <ul className={classes["settings__links"]}>
                     {settingsLinks.map((link, index) => (
                        <li
                           className={
                              activeLink === link.accessor
                                 ? [classes["settings__link"], classes["settings__link_active"]].join(" ")
                                 : classes["settings__link"]
                           }
                           key={index}
                           onClick={() => setActiveLink(link.accessor)}
                        >
                           {link.label}
                        </li>
                     ))}
                  </ul>
               </nav>
               {/* <ProfileImages /> */}

               {activeLink === "account" && <ProfileForm />}
               {activeLink === "preferences" && <ProfilePreferences />}
               {activeLink === "images" && <ProfileImages />}

            </div>
         </div>
      </div>
   );
};

export default ProfileSettings;
