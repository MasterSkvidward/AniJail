import React, {FC, ChangeEvent, useState, Dispatch, SetStateAction} from 'react';
import classes from './MyInputFilter.module.scss';

interface MyInputFilterProps {
    placeholder?: string,
    pattern: RegExp,
    maxValue: number,
    value: string | undefined,
    setValue: Dispatch<SetStateAction<string>>;
}

const MyInputFilter:FC<MyInputFilterProps> = ({placeholder, pattern, maxValue, value}) => {


    const handlerYearFromChange = (e: ChangeEvent<HTMLInputElement>):void => {
        const tmpValue = e.target.value;
        if (pattern.test(tmpValue)) {
            
        } 
        // else {
        //     tmpValue.replace(pattern, '');
        // }
       
        // if (value >= maxValue ){
        //     setCurrentValue(String(maxValue));
        // }
        // else {
        //     setCurrentValue(e.target.value);
        // }
        
    }

    return (
       <input className={classes['input']} type={'text'} placeholder={placeholder} value={value} onChange={e => handlerYearFromChange(e)}>

       </input>
    );
}

export default MyInputFilter;