import React, {FC, useState} from 'react';

import classes from './DropMenu.module.scss';

interface DropMenuProps {
    options: {name: string, value: string}[]
}

const DropMenu: FC<DropMenuProps> = ({options}) => {
    const [currentValue, setCurrentValue] = useState<string>(options[0].name)

    return (
        <div className={classes['dropmenu']}>
            <button className={classes.dropmenu__btn}>{currentValue}</button>
            <div className={classes.dropmenu__options}></div>
        </div>
    );
}

export default DropMenu;