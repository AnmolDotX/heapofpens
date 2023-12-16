import { configureStore } from "@reduxjs/toolkit";
import demoReducer from "./features/demoData";
import toggleReducer from './features/toggleDarkSlice'

export const makeStore = () => {
    return configureStore({
        reducer : {
            demo : demoReducer,
            toggleDark : toggleReducer
        }
    })
}