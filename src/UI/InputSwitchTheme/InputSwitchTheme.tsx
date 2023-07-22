import {FC} from "react";

import classes from "./InputSwitchTheme.module.scss";

import {FaSun} from "react-icons/fa";
import {FaMoon} from "react-icons/fa";

interface InputSwitchThemeProps {
  isChecked: boolean
  changeTheme: () => void,
}

const InputSwitchTheme:FC<InputSwitchThemeProps> = ({ isChecked, changeTheme }) => {
  return (
    <div>
      <input
        onChange={() => changeTheme()}
        checked={isChecked}
        type="checkbox"
        className={classes.checkbox}
        id="chk"
      />
      <label className={classes.label} htmlFor="chk">
        {/* <i className={[classes.moon, "pi pi-moon"].join(" ")}></i> */}
        {/* <i className={[classes.sun, "pi pi-sun"].join(" ")}></i> */}
        <FaMoon className={[classes.moon, classes.icon].join(" ")}/>
        <FaSun className={[classes.sun, classes.icon].join(" ")}/>
   
        <div className={classes.ball}></div>
      </label>
    </div>
  );
}

export default InputSwitchTheme;