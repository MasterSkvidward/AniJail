import React, {FC} from 'react';
import { rowType } from './AnimeCardInfo';
import classes from '../../styles/AnimeCardInfoRow.module.scss';
import { formatGenres } from '../../utils/utils';
import MyLink from '../../UI/MyLink/MyLink';


const AnimeCardInfoRow: FC<rowType> = ({name, value, sortType, isLink}) => {
    const linkNames:string[] = ['']
    
    return (
        <div className={classes.row}>
            <span className={classes.row__name}>{name}</span>
            <div className={classes.row__value}>
                {typeof value === 'string' || typeof value === 'number'
                    ? isLink
                        ? <MyLink sortType={sortType}>{value}</MyLink>
                        : <span>{value}</span>
                    : 
                    formatGenres(value).map((genre, index) => 
                    <div className={classes.row__genre} key={index}>
                        <MyLink sortType={sortType}>{genre}</MyLink>
                    </div>
                )}
                
                
            
            </div>
        </div>
    );
}

export default AnimeCardInfoRow;