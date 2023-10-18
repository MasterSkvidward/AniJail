import React, { FC, useState, useEffect, MouseEvent } from "react";
import { IWatchCategory } from "../../types/user-inteface";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { GoPlus, GoCheck } from "react-icons/go";
import { AiTwotoneHeart } from "react-icons/ai";

import classes from "./DropMenu.module.scss";

interface DropMenuProps {
   options: IWatchCategory[];
   defaultValue: IWatchCategory;
}

const DropMenu: FC<DropMenuProps> = ({ options, defaultValue }) => {
   const [currentValue, setCurrentValue] = useState<IWatchCategory>(defaultValue);
   const [isVisible, setIsVisible] = useState<boolean>(false);

   const handlerDocumentClick = (e: Event): void => {
      setIsVisible(false);
   };

   const handlerOptionClick = (e: MouseEvent, index: number) => {
      setCurrentValue(options[index]);
   };

   const handlerButtonClick = (e: MouseEvent) => {
      e.stopPropagation();
      setIsVisible(!isVisible);
   };

   useEffect(() => {
      document.addEventListener("click", handlerDocumentClick);
      return () => document.removeEventListener("click", handlerDocumentClick);
   }, []);

   return (
      <div className={classes["dropmenu"]}>
         <div
            className={[classes["dropmenu__btn"], classes[`dropmenu__btn_${currentValue.accessor}`]].join(" ")}
            onClick={handlerButtonClick}
         >
            {currentValue.accessor === "add" && <GoPlus />}
            {currentValue.accessor === "viewed" && <GoCheck />}
            {currentValue.accessor === "will_watch" && <GoPlus />}
            {currentValue.accessor === "favorite" && <AiTwotoneHeart />}
            <button>{currentValue.name}</button>
            <MdOutlineKeyboardArrowDown
               className={isVisible ? [classes["arrow"], classes["rotate"]].join(" ") : classes["arrow"]}
            />
         </div>

         <div
            className={
               isVisible ? [classes["dropmenu__options"], classes["active"]].join(" ") : classes["dropmenu__options"]
            }
         >
            {options.map(
               (option, index) =>
                  option.accessor !== currentValue.accessor && (
                     <div className={classes[`dropmenu__option`]} onClick={(e) => handlerOptionClick(e, index)} key={index}>
                        {option.name}
                     </div>
                  )
            )}
            {currentValue.accessor !== defaultValue.accessor && (
               <div className={classes[`dropmenu__option`]} onClick={() => setCurrentValue(defaultValue)}>
                  {"Delete from list"}
               </div>
            )}
         </div>
      </div>
   );
};
export default DropMenu;
