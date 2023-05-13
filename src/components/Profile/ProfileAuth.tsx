import React, {useState, FC, Dispatch, SetStateAction} from 'react';
import classes from '../../styles/ProfileAuth.module.scss';
import LoginForm from '../../UI/LoginForm/LoginForm';
import SignUpForm from '../../UI/SignUpForm/SignUpForm';

interface ProfileAuthProps {
    setModalVisible: Dispatch<SetStateAction<boolean>>
}

const ProfileAuth:FC<ProfileAuthProps> = ({setModalVisible}) => {
    const [isNewUser, setIsNewUser] = useState(false);
    
    return (
       <div className={classes['profile']}>

            { isNewUser
                ?
                    <SignUpForm setIsNewUser={setIsNewUser} setModalVisible={setModalVisible}/>
                :
                    <LoginForm setIsNewUser={setIsNewUser} setModalVisible={setModalVisible}/>
            }
           
       </div>
    );
}

export default ProfileAuth;