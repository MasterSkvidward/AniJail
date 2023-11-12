
import { FC, MouseEvent } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import classes from "./Title.module.scss";

interface TitleProps {
   value: string
   amount?: number
   isLink?: boolean
}

const Title: FC<TitleProps> = ({ value, isLink, amount, ...props }) => {

   return (
      <div className={isLink ? [classes["wrapper"], classes["link"]].join(" ") : classes["wrapper"]} {...props}>
         <h3 className={classes["title"]}>{value}</h3>
         {amount && <p className={classes["amount"]}>{`(${amount})`}</p>}
         {isLink && <MdOutlineKeyboardArrowRight/>}
      </div>
   );
};

export default Title;
