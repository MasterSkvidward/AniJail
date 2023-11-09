import { copyFile } from "fs";
import { AuthAction, AuthActionsEnum, AuthState } from "./types";
// import img from '../../../images/vacant_room_ch2-copy.jpg' ;

// import user_image from "../../../assets/images/user_logo.jpg";
import user_image from "../../../assets/images/makima.jpg";


const initialState: AuthState = {
    isAuth: true,
    user: {id: 1, username: "Master Squidward", email: "Arthur1203@yandex.ru", image_url: user_image, date_joined: 'december 2019', last_login: '2 days ago', about: "Gucci gang bang lang dang"},
    // isLoading: false,
    // error: '',
}


export default function authReducer(state = initialState, action: AuthAction): AuthState {
    switch (action.type) {
        case AuthActionsEnum.SET_AUTH:
            return {...state, isAuth: action.payload};

        case AuthActionsEnum.SET_USER:
            return {...state, user: action.payload};

        default: 
            return state;
    }
}