import {FC} from 'react';
import { Link } from 'react-router-dom';
import { publicRoutes } from '../../components/AppRouter/routes';
import classes from "./RankStatus.module.scss";

import branchLeft from "../../assets/icons/branch-left.svg";
import branchRight from "../../assets/icons/branch-right.svg";

interface RankStatusProps {
    all: number
    rank: number
    width?: number
    height?: number
    fontSize?: string
}

const RankStatus:FC<RankStatusProps> = ({all, rank, width, height, fontSize}) => {
    return (
        <Link to={`${publicRoutes.ANIME_TOP}`} className={classes["rank__link"]}>
        <div className={classes["rank__body"]} style={{fontSize: fontSize}}>
           <img src={branchLeft} alt="branch" style={{width: width, height: height}}/>
           <div className={classes["rank__status"]}>
              <h5 className={classes["rank__top"]}>Top {all}</h5>
              <span className={classes["rank__place"]}>{rank} place</span>
           </div>

           <img src={branchRight} alt="branch" style={{width: width, height: height}}/>
        </div>
     </Link>
    );
}

export default RankStatus;