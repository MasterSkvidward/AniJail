import {FC} from "react";
import classes from "./StatisticCard.module.scss";


interface StatisticCardProps {
    title: string
    amount: string
    src: string
}

const StatisticCard:FC<StatisticCardProps> = ({title, amount, src}) => {
   return (
      <div className={classes["card"]}>
         <div className={classes["card__body"]}>
            <p className={classes["card__amount"]}>{title}</p>
            <h4 className={classes["card__title"]}>{amount}</h4>
         </div>
         <div className={classes["card__img"]}>
            <img src={src} alt="Card" />
         </div>
      </div>
   );
};

export default StatisticCard;
