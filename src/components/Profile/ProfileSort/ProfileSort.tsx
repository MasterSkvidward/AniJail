import { useState, ChangeEvent, MouseEvent } from "react";
import AnimeWatchList from "../../Anime/AnimeWatchList/AnimeWatchList";
import classes from "./ProfileSort.module.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { GrFormClose } from "react-icons/gr";
import { FaList } from "react-icons/fa";
import { BsGrid3X3GapFill } from "react-icons/bs";
import SearchInput from "../../../UI/SearchInput/SearchInput";

const ProfileSort = () => {
   const [value, setValue] = useState<string>("");
   const [currentView, setCurrentView] = useState<string>("table");

   const handleSearch = (e: ChangeEvent<HTMLInputElement>): void => {
      setValue(e.target.value);
   };

   const handleClick = (e: MouseEvent, accessor: string): void => {
      setCurrentView(accessor);
   };

   const icons = [
      { icon: <FaList />, accessor: "table" },
      { icon: <BsGrid3X3GapFill />, accessor: "grid" },
   ];

   return (
      <div className={classes["sort"]}>
         <div className={classes["sort__row"]}>
            {/* <div className={classes["sort__search"]}>
               <AiOutlineSearch />
               <input type="text" placeholder="Filter by name" value={value} onChange={handleSearch} />
               {value && <GrFormClose onClick={() => setValue("")} />}
            </div> */}

            <SearchInput value={value} setValue={setValue} placeholder="Filter by name" />
            <div className={classes["sort__switches"]}>
               {icons.map((icon, index) => (
                  <span
                     className={
                        currentView === icon.accessor
                           ? [classes["sort__icon"], classes["sort__icon_active"]].join(" ")
                           : classes["sort__icon"]
                     }
                     key={index}
                     onClick={(e) => handleClick(e, icon.accessor)}
                  >
                     {icon.icon}
                  </span>
               ))}
            </div>
         </div>

         <AnimeWatchList view={currentView} />
      </div>
   );
};

export default ProfileSort;
