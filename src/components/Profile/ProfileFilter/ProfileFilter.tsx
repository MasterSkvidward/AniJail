import { useState, MouseEvent } from "react";
import classes from "./ProfileFilter.module.scss";

export const profileFilterLinks = [
   { label: "All", accessor: "all", amount: 500 },
   { label: "Watching", accessor: "watching" , amount: 5},
   { label: "Planned", accessor: "planned" , amount: 153},
   { label: "Completed", accessor: "completed" , amount: 331},
   { label: "Favourite", accessor: "favourite" , amount: 8},
   { label: "Dropped", accessor: "dropped", amount: 50 },
];

const ProfileFilter = () => {
   const [activeLink, setActiveLink] = useState<string>("all");

   const handleClick = (e: MouseEvent, accessor: string): void => {
      setActiveLink(accessor);
   };

   return (
      <div className={classes["filter"]}>
         <ul className={classes["filter__folders"]}>
            {profileFilterLinks.map((link, index) => (
               <li
                  className={
                     link.accessor === activeLink
                        ? [classes["filter__folder"], classes["filter__folder_active"]].join(" ")
                        : classes["filter__folder"]
                  }
                  key={index}
                  onClick={(e) => handleClick(e, link.accessor)}
               >
                  <p>{link.label}</p>
                  <span>{link.amount || 0}</span>
               </li>
            ))}
         </ul>
         <div className={classes["filter__block"]}>
            <h3 className={classes["filter__title"]}>Filters</h3>
            <div className={classes["filter__selects"]}></div>
         </div>
      </div>
   );
};

export default ProfileFilter;
