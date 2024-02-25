import authService from "@/appwrite/auth";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import thekua from "js-cookie";

const initialState = {
    status : false,
    userData : null,
}

export const initialiseState = createAsyncThunk('initialiseState', async() => {
    const token = thekua.get('user-token');
    
    const isAuthenticated = !!token;

    try {
        const data = await authService.getCurrentUser();
        return {isAuthenticated : isAuthenticated, data : data};
    } catch (error) {
        console.error("Error occured in getting user authSlice.jsx : ", error.message);
        throw error;
    }
})

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
    },
    extraReducers : (builder) => {
        builder
        .addCase(initialiseState.fulfilled, (state, action) => {
            const {isAuthenticated, data} = action.payload;
            state.status = isAuthenticated;
            state.userData = data;
        })
    }
})

export const {login, logout} = authSlice.actions;
export default authSlice.reducer;