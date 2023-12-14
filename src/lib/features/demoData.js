import { createSlice } from "@reduxjs/toolkit";

export const demoSlice = createSlice({
    name : "demoSlice",
    initialState : {
        demoName : "Anmol"
    },
    reducers : {

    }
})

export const {} = demoSlice.actions;
export default demoSlice.reducer;