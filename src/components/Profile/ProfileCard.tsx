import React, {FC, useState} from 'react';
import { IUser } from '../../store/reducers/auth/types';

import classes from '../../styles/ProfileCard.module.scss';
import ImageResponsive from '../../UI/ImageResponsive/ImageResponsive';
import MyModal from '../../UI/MyModal/MyModal';

interface ProfileCardProps {
    currentUser: IUser,
}

const ProfileCard: FC<ProfileCardProps> = ({currentUser}) => {
    const [modalVisible, setModalVisible] = useState<boolean>(false);

    return (
       <section className={classes['card']}>
            <MyModal visible={modalVisible} setVisible={setModalVisible}><ImageResponsive url={currentUser.image_url}/></MyModal>
           <div className={[classes['card__container'], '_container1800'].join(' ')}>
                <div className={classes['card__media']}>
                    <div 
                        style={{background: `url(${currentUser.image_url}) 0 0 / cover no-repeat`}} 
                        className={classes['card__image']} 
                        onClick={() => setModalVisible(true)}>
                    </div>  
                
                </div>
                <div className={classes['card__body']}>
                    <div className={classes['card__header']}>
                        <h4 className={classes['card__name']}>
                            {currentUser.username}
                        </h4>
                        <h6 className={classes['card__lastseen']}>online {currentUser.last_login}</h6>
                    </div>

                    <div className={classes['card__inforow']}>
                        Member from <span>{currentUser.date_joined}</span>
                    </div>
                </div>
           </div>
       </section>
    );
}

export default ProfileCard;