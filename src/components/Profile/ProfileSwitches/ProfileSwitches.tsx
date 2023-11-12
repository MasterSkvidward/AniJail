import { useState } from "react";
import InputSwitch from "../../../UI/InputSwitch/InputSwitch";
import classes from "./ProfileSwitches.module.scss";

const ProfileSwitches = () => {
    const [switch1Checked, setSwitch1Checked] = useState(true);
    const [switch2Checked, setSwitch2Checked] = useState(true);
    const [switch3Checked, setSwitch3Checked] = useState(false);
    const [switch4Checked, setSwitch4Checked] = useState(false);
    const [switch5Checked, setSwitch5Checked] = useState(true);
    const [switch6Checked, setSwitch6Checked] = useState(false);
    const [switch7Checked, setSwitch7Checked] = useState(true);


   return (
      <div className={classes["switches"]}>
         <div className={classes["switch"]}>
            <p>Show Recommendations</p>
            <InputSwitch isChecked={switch1Checked} onChange={() => setSwitch1Checked(!switch1Checked)} />
         </div>

         <div className={classes["switch"]}>
            <p>Show Anime</p>
            <InputSwitch isChecked={switch2Checked} onChange={() => setSwitch2Checked(!switch2Checked)} />
         </div>

         <div className={classes["switch"]}>
            <p>Show Manga</p>
            <InputSwitch isChecked={switch3Checked} onChange={() => setSwitch3Checked(!switch3Checked)} />
         </div>

         <div className={classes["switch"]}>
            <p>Show Manga</p>
            <InputSwitch isChecked={switch4Checked} onChange={() => setSwitch4Checked(!switch4Checked)} />
         </div>

         <div className={classes["switch"]}>
            <p>Show Manga</p>
            <InputSwitch isChecked={switch5Checked} onChange={() => setSwitch5Checked(!switch5Checked)} />
         </div>

         <div className={classes["switch"]}>
            <p>Show Manga</p>
            <InputSwitch isChecked={switch6Checked} onChange={() => setSwitch6Checked(!switch6Checked)} />
         </div>

         <div className={classes["switch"]}>
            <p>Show Manga</p>
            <InputSwitch isChecked={switch7Checked} onChange={() => setSwitch7Checked(!switch7Checked)} />
         </div>
      </div>
   );
};

export default ProfileSwitches;
