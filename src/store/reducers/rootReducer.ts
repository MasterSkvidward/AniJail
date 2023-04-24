import {combineReducers} from 'redux';
import { store } from '../store';
import {animeReducer} from './anime/animeReducer';
import filterReducer from './filter/filterReducer';
// import { authReducer } from './authReducer';



export const rootReducer = combineReducers({
    // auth: authReducer,
    // anime: animeReducer,
    filter: filterReducer
})


export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch;
