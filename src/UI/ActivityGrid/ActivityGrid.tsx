import React from "react";
import { getActivityDays } from "../../utils/utils";
import classes from "./ActivityGrid.module.scss";

const ActivityGrid = () => {
   const boxesData = [
      { date: "12 Dec 2003", amount: 0 },
      { date: "6 Nov 2013", amount: 1 },
      { date: "8 Nov 2003", amount: 2 },
      { date: "12 Jun 2005", amount: 3 },
      { date: "23 Dec 2003", amount: 4 },
      { date: "12 Nov 2022", amount: 5 },
      { date: "5 Nov 2025", amount: 0 },
      { date: "14 Jul 2003", amount: 0},
      { date: "2 Jul 2003", amount: 1 },
      { date: "24 Mar 2003", amount: 2 },
      { date: "12 Dec 2003", amount: 3 },
      { date: "6 Nov 2013", amount: 4 },
      { date: "8 Nov 2003", amount: 5 },
      { date: "12 Jun 2005", amount: 5 },
      { date: "23 Dec 2003", amount: 2 },
      { date: "12 Nov 2022", amount: 5 },
      { date: "5 Nov 2025", amount: 0 },
      { date: "14 Jul 2003", amount: 6 },
      { date: "2 Jul 2003", amount: 2 },
      { date: "24 Mar 2003", amount: 3 },
      { date: "12 Dec 2003", amount: 0 },
      { date: "6 Nov 2013", amount: 1 },
      { date: "8 Nov 2003", amount: 2 },
      { date: "12 Jun 2005", amount: 3 },
      { date: "23 Dec 2003", amount: 4 },
      { date: "12 Nov 2022", amount: 5 },
      { date: "5 Nov 2025", amount: 0 },
      { date: "14 Jul 2003", amount: 0},
      { date: "2 Jul 2003", amount: 1 },
      { date: "24 Mar 2003", amount: 2 },
      { date: "12 Dec 2003", amount: 3 },
      { date: "6 Nov 2013", amount: 4 },
      { date: "8 Nov 2003", amount: 5 },
      { date: "12 Jun 2005", amount: 5 },
      { date: "23 Dec 2003", amount: 2 },
      { date: "12 Nov 2022", amount: 5 },
      { date: "5 Nov 2025", amount: 0 },
      { date: "14 Jul 2003", amount: 6 },
      { date: "2 Jul 2003", amount: 2 },
      { date: "24 Mar 2003", amount: 3 },
      { date: "12 Dec 2003", amount: 0 },
      { date: "6 Nov 2013", amount: 1 },
      { date: "8 Nov 2003", amount: 2 },
      { date: "12 Jun 2005", amount: 3 },
      { date: "23 Dec 2003", amount: 4 },
      { date: "12 Nov 2022", amount: 5 },
      { date: "5 Nov 2025", amount: 0 },
      { date: "14 Jul 2003", amount: 0},
      { date: "2 Jul 2003", amount: 1 },
      { date: "24 Mar 2003", amount: 2 },
      { date: "12 Dec 2003", amount: 3 },
      { date: "6 Nov 2013", amount: 4 },
      { date: "8 Nov 2003", amount: 5 },
      { date: "12 Jun 2005", amount: 5 },
      { date: "23 Dec 2003", amount: 2 },
      { date: "12 Nov 2022", amount: 5 },
      { date: "5 Nov 2025", amount: 0 },
      { date: "14 Jul 2003", amount: 6 },
      { date: "2 Jul 2003", amount: 2 },
      { date: "24 Mar 2003", amount: 3 },
   ];

   const boxStyle = {
      1: "poor",
      2: "medium",
      3: "good",
   };

   const getAmountStatus = (amount: number): string => {
      if (amount === 1) return "poor";
      if (amount === 2) return "medium";
      if (amount >= 3) return "good";
      return "";
   };

   return (
      <div className={classes["history"]}>
         {[...boxesData, ...boxesData, ...boxesData, ...boxesData, ...boxesData]
            .slice(0, getActivityDays(196))
            .map((box, index) => (
               <div
                  className={classes["history__box"]}
                  data-amount={getAmountStatus(box.amount)}
                  key={index}
                  //   title={box.date}
               >
                  <div className={classes["history__tooltip"]}>
                     <span>Amount: {box.amount}</span>
                     <span>{box.date}</span>
                  </div>
               </div>
            ))}
      </div>
   );
};

export default ActivityGrid;
