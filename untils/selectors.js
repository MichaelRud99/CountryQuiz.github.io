import quizSlice from "./redux/slice/quizSlice";

export const quiz = quizSlice.actions;

export const regionData = (state) => state.quiz.data;
export const questionSelector =(state)=>state.quiz.question
export const quizSelector = (state)=>state.quiz

export const interfaceSelector = (state)=>state.interface
