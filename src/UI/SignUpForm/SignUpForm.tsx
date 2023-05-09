import React, {FC, useState, SyntheticEvent, Dispatch, SetStateAction} from 'react';
import { useDispatch } from 'react-redux';
import { AuthActionCreators } from '../../store/reducers/auth/action-creatores';
import InputField from '../InputField/InputField';

import classes from './SignUpForm.module.scss';

interface SignUpFormProps {
    setModalVisible: Dispatch<SetStateAction<boolean>>
    setIsNewUser: Dispatch<SetStateAction<boolean>>
}

const SignUpForm:FC<SignUpFormProps> = ({setModalVisible, setIsNewUser}) => {
    const dispatch = useDispatch();

    const initialData = {
        nickName: '',
        email: '',
        password: '',
    }
    const [logInData, setLogInData] = useState(initialData)

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        dispatch(AuthActionCreators.setAuth(true));
        setModalVisible(false);
    }

    return (
       <form className={classes['form']} onClick={(e) => e.stopPropagation()} onSubmit={handleSubmit}>
            <h3 className={classes['form__title']}>{'Register'}</h3>
            <div className={classes['form__column']}>
                <InputField
                    type={'text'}
                    label={'NickName'}
                    value={logInData.nickName}
                    onChange={e => setLogInData({...logInData, nickName: e.target.value})}         
                />

                <InputField
                    type={'text'}
                    label={'Email'}
                    value={logInData.email}
                    onChange={e => setLogInData({...logInData, email: e.target.value})}         
                />

                <InputField
                    type={'password'}
                    label={'Password'}
                    value={logInData.password}
                    onChange={e => setLogInData({...logInData, password: e.target.value})}         
                />
                <button className={classes['form__submit']}>Register</button>
                <div className={classes['form__ref']} onClick={() => setIsNewUser(false)}>Have an account?<span>Login</span></div>
            </div>    
       </form>
    );
}

export default SignUpForm;