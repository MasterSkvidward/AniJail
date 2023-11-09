import { useState } from "react";
import InputSwitch from "../../../UI/InputSwitch/InputSwitch";
import classes from "./ProfileSwitches.module.scss";

const ProfileSwitches = () => {
   const [emailChecked, setEmailChecked] = useState(false);
   const [paymentChecked, setPaymentChecked] = useState(false);
   const [showPaymentSystem, setShowPaymentSystem] = useState(false);

   return (
      <div className={classes["switches"]}>
         <div className={classes["switch"]}>
            <p>Show Recommendations</p>
            <InputSwitch isChecked={emailChecked} onChange={() => setEmailChecked(!emailChecked)} />
         </div>

         <div className={classes["switch"]}>
            <p>Show Anime</p>
            <InputSwitch isChecked={paymentChecked} onChange={() => setPaymentChecked(!paymentChecked)} />
         </div>

         <div className={classes["switch"]}>
            <p>Show Manga</p>
            <InputSwitch isChecked={showPaymentSystem} onChange={() => setShowPaymentSystem(!showPaymentSystem)} />
         </div>
      </div>
   );
};

export default ProfileSwitches;
