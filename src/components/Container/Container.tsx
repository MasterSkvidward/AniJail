import React, {FC} from 'react';
import classes from '../../styles/Container.module.scss';

interface ContainerProps extends React.PropsWithChildren {
    className?: string,
}

const Container: FC<ContainerProps> = ({className, children}) => {
    return (
       <div className={className ? [classes.container, className].join(' ') : classes.container}>
           {children}
       </div>
    );
}

export default Container;