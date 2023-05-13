import React, {FC, PropsWithChildren} from 'react';

import classes from './Sidebar.module.scss';

interface SidebarProps extends PropsWithChildren {

}

const Sidebar:FC<SidebarProps> = ({children}) => {
    return (
       <aside className={classes['sidebar']}>
           {children}
       </aside>
    );
}

export default Sidebar;