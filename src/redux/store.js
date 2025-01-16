import { configureStore } from "@reduxjs/toolkit";
import signInReducer from "./features/signIn";
import signUpReducer from "./features/signUp"
import hotelBook from "./features/hotelBooking"
import bookFlight from "./features/flightTicket"
import carRental from "./features/carRental"

const store = configureStore({
  reducer: {
    UserSignIn: signInReducer,
    UserSignUp: signUpReducer,
    bookingHotel: hotelBook,
    flightBook: bookFlight,
    rentCar: carRental
  },
});

export default store;
