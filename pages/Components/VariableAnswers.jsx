import index from "../chouseRegion/css/index.module.css";
import transition from "../../styles/transition.module.css";

const VariableAnswers = ({
   ABC,
   answers,
   answer,
   validTrue,
   setValidTrue,
   validFalse,
   i,
}) => {
   const checkAnswer = (answers, answer, i) => {
      if (answers === answer) {
         setValidTrue("true");
      } else {
         setValidTrue(i);
      }
   };

   return (
      <div
         className={
            (validFalse[0] === "false" &&
               answers === answer &&
               index.trueAnswer) +
            " " +
            (validFalse[0] === "false" &&
               validFalse[1] === i &&
               index.falseAnswer) +
            " " +
            (validTrue === "" ? index.chouse : index.chouseFake) +
            " " +
            transition.bacColor
         }
         onClick={() => checkAnswer(answers, answer, i)}
      >
         <p
            className={
               (validTrue === "true" &&
                  answer === answers &&
                  index.answerResult) +
               " " +
               index.variableAnswer
            }
         >
            {ABC}
         </p>
         <p
            className={
               (validTrue === "true" &&
                  answer === answers &&
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
