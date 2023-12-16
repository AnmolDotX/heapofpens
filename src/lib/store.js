import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from './features/toggleDarkSlice';
import authReducer from './features/authSlice'

export const makeStore = () => {
    return configureStore({
        reducer : {
            auth : authReducer,
            toggleDark : toggleReducer,
        }
    })
}