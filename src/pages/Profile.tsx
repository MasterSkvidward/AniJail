import React, {useEffect} from 'react';

import classes from '../styles/Profile.module.scss';

const Profile = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
       <div className={classes['profile']}>
           Profile page
       </div>
    );
}

export default Profile;