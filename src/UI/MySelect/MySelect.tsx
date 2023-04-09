import React, {useState} from 'react';

import classes from './MySelect.module.scss';

const MySelect = () => {
    const [currentValue, setCurrentValue] = useState<string>('')


    return (
       <div className={classes['select']}>
           <button className={classes.btn}>{currentValue}</button>
           <div className={classes.select__options}></div>
       </div>
    );
}

export default MySelect;