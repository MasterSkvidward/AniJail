import React, {FC, PropsWithChildren} from 'react';
import { Link } from 'react-router-dom';

import classes from './MyLink.module.scss';

interface MyLinkProps {
    className?: string
    value: string
}

const MyLink:FC<MyLinkProps> = ({className, value}) => {
    return (
       <Link to='/anime' className={classes['myLink']}>
           {value}
       </Link>
    );
}

export default MyLink;