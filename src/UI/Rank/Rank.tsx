import {FC} from 'react';
import classes from "./Rank.module.scss";

interface RankProps {
    total: number
    rank: number
}

const Rank:FC<RankProps> = ({total, rank}) => {
    return (
       <div className={classes["rank"]}>
           
       </div>
    );
}

export default Rank;