import React, {FC} from 'react';
import classes from './MyInput.module.scss';

interface MyInputProps {
    placeholder: string;
}

const MyInput:FC<MyInputProps> = ({placeholder}) => {
    return (
        <input className={classes.input} placeholder={placeholder} type="text">
            
        </input>
    );
}

export default MyInput;