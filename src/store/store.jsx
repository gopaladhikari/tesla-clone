import { configureStore } from "@reduxjs/toolkit";
import carSlice from "./slice/carSlice";

export const store = configureStore({
  reducer: {
    car: carSlice.reducer,
  },
});
