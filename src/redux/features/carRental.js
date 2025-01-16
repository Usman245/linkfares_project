import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const carRental = createAsyncThunk(
    "data/carRental",
    async () => {
        const response = await axios.get("https://linkfarebackend-production.up.railway.app/api/carental/getall");
        return response.data;
    }
);

const sliceCarRental = createSlice({
    name: "carRental",
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    reducers: {}, // No reducers defined
    extraReducers: (builder) => {
        builder
            .addCase(carRental.pending, (state) => {
                state.loading = true;
                state.error = null; // Set error to null on pending
            })
            .addCase(carRental.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(carRental.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default sliceCarRental.reducer;
