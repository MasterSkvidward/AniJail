
import { FC, MouseEvent } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import classes from "./Title.module.scss";

interface TitleProps {
   value: string;
   isLink?: boolean;
}

const Title: FC<TitleProps> = ({ value, isLink, ...props }) => {

   return (
      <div className={isLink ? [classes["wrapper"], classes["link"]].join(" ") : classes["wrapper"]} {...props}>
         <h3 className={classes["title"]}>{value}</h3>
         {isLink && <MdOutlineKeyboardArrowRight/>}
      </div>
   );
};

export default Title;
