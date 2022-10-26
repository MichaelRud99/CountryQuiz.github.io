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

      writeQuestion: (state, question) => {
         state.question = question.payload;
      },
      requestFail: (state) => {
         state.fail = !state.fail;
      },

      deleteQuestion:()=>{}
   },
});

export const { readData, writeData, writeQuestion, requestFail,deleteQuestion } =
   quizSlice.actions;

export default quizSlice.reducer;
