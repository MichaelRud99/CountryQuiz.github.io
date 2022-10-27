import index from "../chouseRegion/css/index.module.css";
import transition from "../../styles/transition.module.css";
import { useActions } from "../hooks/useAction";
import {quizSlice} from "../../untils/redux/slice/quizSlice";

const VariableAnswers = ({
   ABC,
   answers,
   answer,
   valid,
   setValid,
   validTrue,
   setValidTrue,
   validFalse,
   i,
}) => {
   const slice = useActions(quizSlice.actions);

   const checkAnswer = (answers, answer, i) => {
      if (valid) {
         if (answers === answer) {
            slice.countAnswer();
            setValidTrue([true, i]);
         } else {
            setValidTrue([false, i]);
         }
      }
      setValid(false);
   };

   return (
      <div
         className={
            (valid === true ? index.chouse : index.chouseFake) +
            " " +
            (validFalse[0] === false &&
               answers === answer &&
               index.trueAnswer) +
            " " +
            (validTrue[0] === true && validTrue[1] === i && index.trueAnswer) +
            " " +
            (validFalse[0] === false &&
               validFalse[1] === i &&
               index.falseAnswer) +
            " " +
            transition.bacColor
         }
         onClick={() => checkAnswer(answers, answer, i)}
      >
         <p
            className={
               (validFalse[0] === false &&
                  answers === answer &&
                  index.answerResult) +
               " " +
               (validTrue[0] === false &&
                  validFalse[1] === i &&
                  index.answerResult) +
               " " +
               index.variableAnswer
            }
         >
            {ABC}
         </p>
         <p
            className={
               (validFalse[0] === false &&
                  answers === answer &&
                  index.answerResult) +
               " " +
               (validTrue[0] === false &&
                  validTrue[1] === i &&
                  index.answerResult) +
               " " +
               index.answer
            }
         >
            {answers}
         </p>
      </div>
   );
};
export default VariableAnswers;
