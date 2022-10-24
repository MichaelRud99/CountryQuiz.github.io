import { createSlice } from "@reduxjs/toolkit";

export const interfaceSlice = createSlice({
   name: "interfaceActions",
   initialState: { loading: false },
   reducers: {
      loading: (state,bool) => {
         state.loading = bool.payload;
      },

   },
});

export const { loading } = interfaceSlice.actions;

export default interfaceSlice.reducer;
