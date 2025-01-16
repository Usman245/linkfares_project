import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const hotelBook = createAsyncThunk("data/hotelBooking", async () => {
    const response = await axios.get('https://linkfarebackend-production.up.railway.app/api/hotel/getall');
    return response.data;
});

const sliceHotelBooking = createSlice({
    name: "hotelBooking",
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(hotelBook.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(hotelBook.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(hotelBook.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default sliceHotelBooking.reducer;
