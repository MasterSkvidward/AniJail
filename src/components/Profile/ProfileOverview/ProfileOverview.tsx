import React from 'react';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import ProfileStatistics from '../ProfileStatistics/ProfileStatistics';
import ProfileStats from '../ProfileStats/ProfileStats';
import classes from "./ProfileOverview.module.scss";

const ProfileOverview = () => {
    const {user} = useTypedSelector(state => state.auth)

    return (
       <div className={classes["overview"]}>
            <div className={[classes["overview__container"], "_container-main"].join(" ")}>
                <div className={classes[""]}>
                    
                </div>
            </div>
          
            {/* <ProfileStatistics currentUser={user}/> */}
       </div>
    );
}

export default ProfileOverview;