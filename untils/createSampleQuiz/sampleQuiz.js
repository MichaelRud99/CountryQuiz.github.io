import rndSample from "./rndSample";
import enumeration from "./enumeration";

const sampleQuiz = (regionArr) => {
   const question = [];
   const variableAnswer = [];
   const quizArr = [];
   question = rndSample(regionArr, 1);
   variableAnswer = rndSample(regionArr, 3);
   const questionFlag = question[0].flags.png;
   const answer = question[0].name.common;

   const answers = variableAnswer.map((name) => name.name.common);
   answers.push(answer);
   let Vanswers = enumeration([answers[0], answers[1], answers[2], answers[3]]);
   question = { flag: questionFlag, variableAnswer: Vanswers, answer: answer };
   quizArr.push(question);

   return quizArr;
};
export default sampleQuiz;
