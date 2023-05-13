import React, {useEffect} from 'react';

import classes from '../styles/Profile.module.scss';
import ProfileCard from '../components/Profile/ProfileCard';
import { useParams } from 'react-router-dom';
import { useTypedSelector } from '../hooks/useTypedSelector';
import ProfileStatistics from '../components/Profile/ProfileStatistics';

type ParamsType = {
    id: string;
}

const Profile = () => {
    const params = useParams<ParamsType>();
    const {user} = useTypedSelector(state => state.auth)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
       <div className={classes['profile']}>
           <ProfileCard currentUser={user}/>
           <ProfileStatistics currentUser={user}/>
       </div>
    );
}

export default Profile;