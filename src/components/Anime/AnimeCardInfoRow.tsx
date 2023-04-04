import React, {FC} from 'react';
import { rowType } from './AnimeCardInfo';
import classes from '../../styles/AnimeCardInfoRow.module.scss';


const AnimeCardInfoRow: FC<rowType> = ({name, value, sortType}) => {
    return (
        <div className={classes.row}>
            <span className={classes.row__name}>{name}</span><span className={classes.row__value}>{value}</span>
        </div>
    );
}

export default AnimeCardInfoRow;