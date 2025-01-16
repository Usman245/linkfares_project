import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const bookFlight = createAsyncThunk(
    "data/flightTickets",
    async () => {
        const response = await axios.get("https://linkfarebackend-production.up.railway.app/api/flight/getallflight");
        return response.data;
    }
);

const sliceFlightTicket = createSlice({
    name: "flightTicket",
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    reducers: {}, // No reducers defined
    extraReducers: (builder) => {
        builder
            .addCase(bookFlight.pending, (state) => {
                state.loading = true;
                state.error = null; // Set error to null on pending
            })
            .addCase(bookFlight.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(bookFlight.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default sliceFlightTicket.reducer;
