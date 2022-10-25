import { createSlice } from "@reduxjs/toolkit";

export const quizSlice = createSlice({
   name: "quiz",
   initialState: { data: [], question: [], id: 0 },
   reducers: {
      readData: (state, country) => {
         state.country = country.payload;
      },
      writeData: (state, data) => {
         state.data = data.payload;
      },

      writeQuestion: (state, question) => {
         state.question = question.payload;
         state.id = state.id++;
      },
      requestFail: (state) => {
         state.fail = !state.fail;
      },
   },
});

export const { readData, writeData, writeQuestion, requestFail } =
   quizSlice.actions;

export default quizSlice.reducer;
