import rndSample from "./rndSample";

const sampleQuiz = (regionArr) => {
   const question = [];
   const variableAnswer = [];
   const quizArr = [];
   question = rndSample(regionArr, 1);
   variableAnswer = rndSample(regionArr, 3);
   const questionFlag = question[0].flags.png;
   const questionCountry = question[0].name.common;
   const variableAnswerCountry = variableAnswer.map((name) => name.name.common);
   variableAnswerCountry.push(questionCountry);

   question = {flag:questionFlag,variableAnswer:variableAnswerCountry}
   quizArr.push(question);

   return quizArr;
};
export default sampleQuiz;
