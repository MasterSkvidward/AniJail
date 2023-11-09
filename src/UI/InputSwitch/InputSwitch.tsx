import {FC} from "react";
import classes from "./InputSwitch.module.scss";

interface InputSwitchProps {
    isChecked: boolean
    onChange: () => void
}

const InputSwitch:FC<InputSwitchProps> = ({ isChecked, onChange, ...props}) => {
   return (
      <label className={classes.switch}>
         <input {...props} type="checkbox" checked={isChecked} onChange={onChange}/>
         <span className={[classes.slider, classes.round].join(" ")}></span>
      </label>
   );
};

export default InputSwitch;
