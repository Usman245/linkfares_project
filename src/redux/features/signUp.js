import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async Thunk for Sign-Up
export const signUp = createAsyncThunk('signUp/data', async (signUpData, { rejectWithValue }) => {
    try {
        const response = await axios.post('https://linkfarebackend-production.up.railway.app/api/auth/register', signUpData);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data || "Something went wrong");
    }
});

const signUpSlice = createSlice({
    name: "signUp",
    initialState: {
        user: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(signUp.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(signUp.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(signUp.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Failed to sign up";
            });
    },
});

export default signUpSlice.reducer;
