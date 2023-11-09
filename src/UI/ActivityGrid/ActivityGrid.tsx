import React from "react";
import { getActivityDays } from "../../utils/utils";
import classes from "./ActivityGrid.module.scss";

const ActivityGrid = () => {
   const boxesData = [
      { date: "12.12.2003", amount: 0 },
      { date: "12.12.2003", amount: 1 },
      { date: "12.12.2003", amount: 2 },
      { date: "12.12.2003", amount: 3 },
      { date: "12.12.2003", amount: 0 },
      { date: "12.12.2003", amount: 1 },
      { date: "12.12.2003", amount: 4 },
      { date: "12.12.2003", amount: 2 },
      { date: "12.12.2003", amount: 4 },
      { date: "12.12.2003", amount: 0 },
      { date: "12.12.2003", amount: 0 },
      { date: "12.12.2003", amount: 3 },
      { date: "12.12.2003", amount: 4 },
      { date: "12.12.2003", amount: 4 },
      { date: "12.12.2003", amount: 2 },
      { date: "12.12.2003", amount: 0 },
      { date: "12.12.2003", amount: 0 },
      { date: "12.12.2003", amount: 0 },
      { date: "12.12.2003", amount: 1 },
      { date: "12.12.2003", amount: 4 },
      { date: "12.12.2003", amount: 2 },
      { date: "12.12.2003", amount: 4 },
      { date: "12.12.2003", amount: 0 },
      { date: "12.12.2003", amount: 0 },
      { date: "12.12.2003", amount: 3 },
      { date: "12.12.2003", amount: 4 },
      { date: "12.12.2003", amount: 4 },
      { date: "12.12.2003", amount: 2 },
      { date: "12.12.2003", amount: 0 },
      { date: "12.12.2003", amount: 0 },
      { date: "12.12.2003", amount: 0 },
      { date: "12.12.2003", amount: 1 },
      { date: "12.12.2003", amount: 4 },
      { date: "12.12.2003", amount: 2 },
      { date: "12.12.2003", amount: 4 },
      { date: "12.12.2003", amount: 0 },
      { date: "12.12.2003", amount: 0 },
      { date: "12.12.2003", amount: 3 },
      { date: "12.12.2003", amount: 4 },
      { date: "12.12.2003", amount: 4 },
      { date: "12.12.2003", amount: 2 },
      { date: "12.12.2003", amount: 0 },
      { date: "12.12.2003", amount: 0 },
      { date: "12.12.2003", amount: 0 },
      { date: "12.12.2003", amount: 1 },
      { date: "12.12.2003", amount: 4 },
      { date: "12.12.2003", amount: 2 },
      { date: "12.12.2003", amount: 4 },
      { date: "12.12.2003", amount: 0 },
      { date: "12.12.2003", amount: 0 },
      { date: "12.12.2003", amount: 3 },
      { date: "12.12.2003", amount: 4 },
   ];

   const boxStyle = {
        1: "poor",
        2: "medium",
        3: "good",
   }

   const getAmountStatus = (amount:number):string => {
        if (amount === 1) return "poor";
        if (amount === 2) return "medium";
        if (amount >= 3) return "good";
        return "";
   }

   return (
      <div className={classes["history"]}>
         {[...boxesData, ...boxesData, ...boxesData, ...boxesData, ...boxesData].slice(0, getActivityDays(196)).map((box, index) => (
            <span className={classes["history__box"]} data-amount={getAmountStatus(box.amount)} key={index} title={box.date}></span>
         ))}
      </div>
   );
};

export default ActivityGrid;
