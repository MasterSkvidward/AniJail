import React, {FC, Dispatch, SetStateAction, ChangeEvent} from 'react';
import classes from './MyInput.module.scss';

interface MyInputProps {
    placeholder?: string;
    setValue:Dispatch<SetStateAction<string>>;
    styles?: {},
}

const MyInput:FC<MyInputProps> = ({placeholder, setValue, styles}) => {

    const handlerChange = (e: ChangeEvent<HTMLInputElement>):void => {
        setValue(e.target.value)
    }

    return (
        <input className={classes.input} placeholder={placeholder} onChange={handlerChange} type="text" style={styles}>
            
        </input>
    );
}

export default MyInput;