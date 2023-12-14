import { configureStore } from "@reduxjs/toolkit";
import demoReducer from "./features/demoData";

export const makeStore = () => {
    return configureStore({
        reducer : {
            demo : demoReducer
        }
    })
}