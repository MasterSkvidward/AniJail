import { FC } from "react";
import classes from "./CategoriesOverview.module.scss";

export interface ICategory {
   label: string;
   amount: number;
}

interface CategoriesOverviewProps {
   categories: ICategory[];
}

const CategoriesOverview: FC<CategoriesOverviewProps> = ({ categories }) => {
   const totalAmount = categories.map((category) => category.amount).reduce((a, b) => a + b, 0);
   const sortedCategories = categories.sort((a, b) => b.amount - a.amount);

   const getPercentage = (amount: number): number => {
      return (amount * 100) / totalAmount;
   };

   return (
      <div className={classes["overview"]}>
         <div className={classes["overview__categories"]}>
            {sortedCategories.map((category, index) => (
               <div className={classes["overview__column"]} key={index}>
                  <div className={classes["overview__category"]} data-index={index}>
                     {category.label}
                  </div>
                  <span className={classes["overview__amount"]}>{category.amount}</span>
               </div>
            ))}
         </div>
         <div className={classes["overview__percentage-bar"]}>
            {sortedCategories.map((category, index) => (
               <div
                  className={classes["overview__bar"]}
                  style={{ width: `${getPercentage(category.amount)}%` }}
                  key={index}
                  data-index={index}
                  title={category.label}
               ></div>
            ))}
         </div>
      </div>
   );
};

export default CategoriesOverview;
