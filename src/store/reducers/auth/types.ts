import { IAnime, IAnimeSearchParams } from "../../../types/jikanMoe/jikan";

export interface IUser {
    id: number,
    username: string,
    email: string,
    image_url: string,
    last_login?: string,
    date_joined?: string,
    is_active?: boolean,
    is_superuser?: boolean,
    is_staff?: boolean,
}

export interface AuthState {
    isAuth: boolean,
    user: IUser,
}


export enum AuthActionsEnum {
    SET_AUTH = "SET_AUTH",
    SET_USER = "SET_USER",
}


interface SetAuthAction{
    type: AuthActionsEnum.SET_AUTH;
    payload: boolean;
}

interface SetUserAction{
    type: AuthActionsEnum.SET_USER;
    payload: IUser;
}


export type AuthAction = 
    SetAuthAction | SetUserAction 
