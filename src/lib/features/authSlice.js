import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status : null,
    userData : null,
}

export const authSlice = createSlice({
    name : 'auth',
    initialState,
    reducers : {
        login : (state , action) => {
            state.status = true;
            state.userData = action.payload.userData;
        },
        logout : (state) => {
            state.userData = null
            state.status = false;
        }
    }
})

export const {login, logout} = authSlice.actions;
export default authSlice.reducer;