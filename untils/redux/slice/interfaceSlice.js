import { createSlice } from "@reduxjs/toolkit";

export const interfaceSlice = createSlice({
   name: "interfaceActions",
   initialState: { open: true },
   reducers: {
      openFalse: (state) => {
         state.open = false;
      },
      openTrue: (state) => {
         state.open = true;
      },
   },
});

export const { openTrue, openFals } = interfaceSlice.actions;

export default interfaceSlice.reducer;
