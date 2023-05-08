import React, {FC} from 'react';

import classes from './InputField.module.scss';

interface InputFieldProps {
    label: string,
    type: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

const InputField:FC<InputFieldProps> = ({label, type, value, onChange}) => {
    return (   
        <div className={[classes["form__group"], classes['field']].join(' ')}>
            <input
                type={type}
                value={value}
                onChange={onChange}
                className={classes["form__field"]} placeholder={label} name={label} id={label} required />
            <label htmlFor={label} className={classes["form__label"]}>{label}</label>
        </div>
    );
}

export default InputField;