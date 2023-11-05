import React from "react";
import classes from "./ScoreChart.module.scss";

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

export const options = {
//    responsive: true,
   scales: {
      x: {
         grid: {
            display: false,
         },
        //  backgroundColor: "rgb(39, 39, 37)",
         ticks: {
            font: {
               size: 17,
               color: "rgb(255,255,255)",
               weight: "700",
            },
         },
      },
      y: {
         grid: {
            display: false,
            drawBorder: false,
         },

         ticks: {
            display: false,
         },
      },
   },
   borderRadius: 7,
//    plugins: {
//       datalabels: {
//          align: "top",
//          anchor: "end",
//       },
//    },
};

const labels = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

const data = {
   labels,

   datasets: [
      {
         data: [10, 23, 45, 18, 6, 9, 33, 19, 5, 41],
         backgroundColor: "rgb(254, 20, 57)",
        //  datalabels: {
        //     align: "top",
        //     color: "blue",
        //     anchor: "end",
        //     offset: 5,
        //  },
      },
   ],
};

const ScoreChart = () => {
   return (
      <div className={classes["chart"]}>
         <Bar
            options={options}
            data={data}
            // {...props}
         />
      </div>
   );
};

export default ScoreChart;
