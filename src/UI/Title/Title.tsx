
import { FC, MouseEvent } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import classes from "./Title.module.scss";

interface TitleProps {
   value: string;
   link?: string;
}

const Title: FC<TitleProps> = ({ value, link }) => {
    const navigate = useNavigate();

    const handleCLick = (e: MouseEvent<HTMLDivElement>):void => {
        e.stopPropagation();
       link && navigate(link)
    }

   return (
      <div className={link ? [classes["wrapper"], classes["link"]].join(" ") : classes["wrapper"]} onClick={handleCLick}>
         <h3 className={classes["title"]}>{value}</h3>
         {link && <MdOutlineKeyboardArrowRight/>}
      </div>
   );
};

export default Title;
