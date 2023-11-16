import { FC, MouseEvent } from "react";
import { getShortenedString } from "../../utils/utils";
import classes from "./Tag.module.scss";

interface TagProps {
   value: string;
   onClick: React.MouseEventHandler<HTMLSpanElement>;
}

const Tag: FC<TagProps> = ({ value, onClick }) => {
   return (
      <span className={classes["tag"]} onClick={onClick}>
         {getShortenedString(value, 80)}
      </span>
   );
};

export default Tag;
