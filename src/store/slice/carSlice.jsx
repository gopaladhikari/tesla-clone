import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cars: ["Model S", "Model 3", "Model X", "Model Y"],
};

const carSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    add() {},
  },
});

export const { add } = carSlice.actions;

export default carSlice;
