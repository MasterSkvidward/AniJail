import { FC, MouseEvent } from "react";
import { getShortenedString } from "../../utils/utils";
import classes from "./Tag.module.scss";

interface TagProps {
   value: string;
   onClick: React.MouseEventHandler<HTMLSpanElement>;
}

const Tag: FC<TagProps> = ({ value, onClick }) => {
   return (
      <span className={classes["tag"]} onClick={(e) => onClick(e)}>
         {getShortenedString(value, 90)}
      </span>
   );
};

export default Tag;
