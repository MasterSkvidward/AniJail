import React, {FC} from 'react';
import { getScoreColor } from '../../utils/utils';

import classes from './Score.module.scss';

interface ScoreProps {
    score: number;
    fontSize: number
}

const Score:FC<ScoreProps> = ({score, fontSize}) => {
    return (
        <div style={{fontSize: fontSize}} className={[classes['score'], classes[getScoreColor(score)]].join(' ')}>
            {score}
        </div>
    );
}

export default Score;