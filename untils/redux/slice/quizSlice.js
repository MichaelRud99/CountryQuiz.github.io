import { createSlice } from "@reduxjs/toolkit";

export const quizSlice = createSlice({
   name: "quiz",
   initialState: {},
   reducers: {
      readData: (state, country) => {
         state.country = country.payload;
      },
      writeData: (state, data) => {
         state.data = data.payload;
      },
   },
});

export const { readData, writeData } = quizSlice.actions;

export default quizSlice.reducer;
