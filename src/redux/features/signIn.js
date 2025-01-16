import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Async Thunk for Sign-In
export const signIn = createAsyncThunk("signIn/data", async (signInData, { rejectWithValue }) => {
    try {
        const response = await axios.post('https://linkfarebackend-production.up.railway.app/api/auth/login', signInData);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data || "Something went wrong");
    }
});

const signInSlice = createSlice({
    name: "signIn",
    initialState: {
        user: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(signIn.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(signIn.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(signIn.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Failed to sign in";
            });
    },
});

export default signInSlice.reducer;
