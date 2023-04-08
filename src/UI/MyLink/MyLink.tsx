import React, {FC, PropsWithChildren} from 'react';
import { Link } from 'react-router-dom';

import classes from './MyLink.module.scss';

interface MyLinkProps extends PropsWithChildren {
    className?: string,
    sortType: string | number | undefined
}

const MyLink:FC<MyLinkProps> = ({className, sortType, children}) => {
    return (
       <Link to='' className={classes['myLink']}>
           {children}
       </Link>
    );
}

export default MyLink;