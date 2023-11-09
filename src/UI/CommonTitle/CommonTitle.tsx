import {FC} from 'react';
import classes from "./CommonTitle.module.scss";

interface CommonTitleProps {
    value: string
    isLink?: boolean
}

const CommonTitle:FC<CommonTitleProps> = ({value, isLink}) => {
    return (
       <h3 className={isLink? [classes["title"], classes["link"]].join(" ") : classes["title"]}>
            {value}
       </h3>
    );
}

export default CommonTitle;