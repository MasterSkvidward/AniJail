import React, {FC, useState, SyntheticEvent, Dispatch, SetStateAction} from 'react';
import { useDispatch } from 'react-redux';
import { AuthActionCreators } from '../../store/reducers/auth/action-creatores';
import InputField from '../InputField/InputField';

import classes from './LoginForm.module.scss';

interface LoginFormProps {
    setModalVisible: Dispatch<SetStateAction<boolean>>
    setIsNewUser: Dispatch<SetStateAction<boolean>>
}

const LoginForm:FC<LoginFormProps> = ({setModalVisible, setIsNewUser}) => {
    const dispatch = useDispatch();

    const initialData = {
        login: '',
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
            <h3 className={classes['form__title']}>{'Welcome back!'}</h3>
            <div className={classes['form__column']}>
                <InputField
                    type={'text'}
                    label={'Login'}
                    value={logInData.login}
                    onChange={e => setLogInData({...logInData, login: e.target.value})}         
                />

                <InputField
                    type={'password'}
                    label={'Password'}
                    value={logInData.password}
                    onChange={e => setLogInData({...logInData, password: e.target.value})}         
                />
                <button className={classes['form__submit']}>Login</button>
                <div className={classes['form__ref']} onClick={() => setIsNewUser(true)}>Dont have an account?<span>Register</span></div>
            </div>    
       </form>
    );
}

export default LoginForm;