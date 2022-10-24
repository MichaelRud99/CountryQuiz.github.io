import { createSlice } from "@reduxjs/toolkit";

export const quizSlice = createSlice({
   name: "quiz",
   initialState: { data: [], question: [] },
   reducers: {
      readData: (state, country) => {
         state.country = country.payload;
      },
      writeData: (state, data) => {
         state.data = data.payload;
      },

      writeQuestion: (state, questio) => {
         state.question = questio.payload;
      },
   },
});

export const { readData, writeData, writeQuestion } = quizSlice.actions;

export default quizSlice.reducer;
