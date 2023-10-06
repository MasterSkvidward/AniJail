import React, {FC} from 'react';
import { getScoreColor, getAnimeScore } from '../../utils/utils';

import classes from './Score.module.scss';

interface ScoreProps {
    score: number | undefined;
    fontSize?: number
}

const Score:FC<ScoreProps> = ({score, fontSize}) => {
    return (
        <div style={{fontSize: fontSize}} className={score? [classes['score'], classes[getScoreColor(score? score: 0)]].join(' ') : classes["score"]}>
            {getAnimeScore(score)}
        </div>
    );
}

export default Score;