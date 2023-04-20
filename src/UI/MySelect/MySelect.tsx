import React, {FC, useState} from 'react';
import { ISelectOption } from '../../types/userInteface';
import classes from './MySelect.module.scss';

interface MySelectProps {
    options?: ISelectOption;
}

const MySelect:FC<MySelectProps> = ({options}) => {
    const [currentValue, setCurrentValue] = useState<string>('')

    return (
       <div className={classes['select']}>
           <button className={classes.select__btn}>{currentValue}</button>
           <div className={classes.select__options}></div>
       </div>
    );
}

export default MySelect;