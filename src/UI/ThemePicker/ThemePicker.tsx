import {MouseEvent} from 'react';
import classes from "./ThemePicker.module.scss";

interface IColors  {
    [x:string]: string;
}

const ThemePicker = () => {

    const changeMainColor = (e:MouseEvent, color:string) => {
        const colors: IColors = {
            red: "221, 78, 78",
            blue: "80, 134, 221",
            green: "202, 233, 98",
        }

        console.log( colors[color as keyof IColors]);
        

        document.documentElement.style.setProperty("--color-main", colors[color as keyof IColors]);
    }

    return (
       <div className={classes["themes"]}>
           <div className={[classes["theme"], classes["red"]].join(" ")} onClick={e => changeMainColor(e, "red")}></div>
           <div className={[classes["theme"], classes["blue"]].join(" ")} onClick={e => changeMainColor(e, "blue")}></div>
           <div className={[classes["theme"], classes["green"]].join(" ")} onClick={e => changeMainColor(e, "green")}></div>
       </div>
    );
}

export default ThemePicker;