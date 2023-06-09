import {combineReducers} from 'redux';
import { store } from '../store';
import filterReducer from './filter/filterReducer';
import authReducer from './auth/filterReducer';
// import { authReducer } from './authReducer';



export const rootReducer = combineReducers({
    auth: authReducer,
    filter: filterReducer
})


export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch;
