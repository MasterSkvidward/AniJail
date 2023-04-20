import {combineReducers} from 'redux';
import {animeReducer} from './animeReducer';
// import { authReducer } from './authReducer';



export const rootReducer = combineReducers({
    // auth: authReducer,
    // anime: animeReducer,
})


export type RootState = ReturnType<typeof rootReducer>
