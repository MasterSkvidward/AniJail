import React from "react";
import ScoreChart from "../../../UI/ScoreChart/ScoreChart";
import PieChart from "../../../UI/PieChart/PieChart";
import Title from "../../../UI/Title/Title";
import StatisticCard from "../../StatisticCard/StatisticCard";
import classes from "./ProfileStats.module.scss";

import tv from "../../../assets/icons/tv.svg";
import calendar from "../../../assets/icons/calendar.svg";

const ProfileStats = () => {
   return (
      <section className={classes["stats"]}>
         <div className={[classes["stats__container"], "_container-main"].join(" ")}>
            <div className={classes["stats__cards"]}>
               <h3 className={classes["stats__title"]}>Cards</h3>
               <div className={classes["stats__cards-block"]}>
                  <StatisticCard title={"Total Anime"} amount={"353"} src={tv} />
                  <StatisticCard title={"Episodes"} amount={"1368"} src={tv} />
                  <StatisticCard title={"Days Watched"} amount={"57.5"} src={calendar} />
                  <StatisticCard title={"Mean Score"} amount={"7.4"} src={tv} />
                  <StatisticCard title={"Fav Anime"} amount={"11"} src={tv} />
               </div>
            </div>

            <div className={classes["stats__graph"]}>
               <h3 className={classes["stats__title"]}>Score</h3>
               <ScoreChart />
            </div>

            <div className={classes["stats__pies"]}>
               <h3 className={classes["stats__title"]}>Countries</h3>
               <div className={classes["stats__pies-block"]}>
                  <PieChart />
                  <PieChart />
                  <PieChart />
               </div>
            </div>
         </div>
      </section>
   );
};

export default ProfileStats;
