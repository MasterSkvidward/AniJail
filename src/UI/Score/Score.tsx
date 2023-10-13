import React, {FC} from 'react';
import { getScoreColor, getAnimeScore } from '../../utils/utils';

import classes from './Score.module.scss';

interface ScoreProps {
    score: number | undefined;
}

const Score:FC<ScoreProps> = ({score}) => {
    return (
        <span className={score? [classes['score'], classes[getScoreColor(score? score: 0)]].join(' ') : classes["score"]}>
            {getAnimeScore(score)}
        </span>
    );
}

export default Score;