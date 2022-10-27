import { useEffect, useState } from "react";
import Router from "next/router";
import enumeration from "../../untils/createSampleQuiz/enumeration.js";
import Layout from "../Components/Layout/Layout";
import Image from "next/image";
import index from "./css/index.module.css";
import transition from "../../styles/transition.module.css";

import { useActions } from "../hooks/useAction";
import { interfaceSlice } from "../../untils/redux/slice/interfaceSlice";
import { quizSlice } from "../../untils/redux/slice/quizSlice.js";

import VariableAnswers from "../Components/VariableAnswers.jsx";

const Id = ({ question, ctx }) => {
   ctx = ctx * 1;

   const [valid, setValid] = useState(true);
   const [validTrue, setValidTrue] = useState(true);
   const [validFalse, setValidFalse] = useState([true, -1]);

   const answers = question.variableAnswer.split(",");
   const slice = useActions(interfaceSlice.actions);
   const sliceQuiz = useActions(quizSlice.actions);

   useEffect(() => {
      if (validTrue != true) {
         const i = validTrue;
         setValidFalse(i);
      }
   }, [validTrue]);

   useEffect(() => {
      slice.loading(false);
   }, []);

   const backToChouse = () => {
      Router.push("/");
      sliceQuiz.deleteQuestion();
   };

   const nextQuestion = () => {
      ctx++;
      setValid(true);
      setValidFalse(true);
      setValidTrue(true);
      Router.push("/chouseRegion/" + ctx);
   };

   return (
      <>
         <Layout>
            <h1 className={index.title}>COUNTRY QUIZ</h1>
            <div className={index.img}></div>
            <section className={index.body + " " + index.flex}>
               <div className={index.flag}>
                  <Image
                     src={question.flag}
                     alt="Flag Country"
                     width={84}
                     height={54}
                  />
               </div>
               <p className={index.question}>
                  Which country does this flag belong to?
               </p>
               <div className={index.flex}>
                  <VariableAnswers
                     ABC={"A"}
                     answers={answers[0]}
                     answer={question.answer}
                     valid={valid}
                     setValid={setValid}
                     validTrue={validTrue}
                     setValidTrue={setValidTrue}
                     validFalse={validFalse}
                     checkAnswer={() => checkAnswer()}
                     i={0}
                  />

                  <VariableAnswers
                     ABC={"B"}
                     answers={answers[1]}
                     answer={question.answer}
                     valid={valid}
                     setValid={setValid}
                     validTrue={validTrue}
                     setValidTrue={setValidTrue}
                     validFalse={validFalse}
                     checkAnswer={() => checkAnswer()}
                     i={2}
                  />
                  {/* Пропускаем i=1 из-за ошибки */}
                  <VariableAnswers
                     ABC={"C"}
                     answers={answers[2]}
                     answer={question.answer}
                     valid={valid}
                     setValid={setValid}
                     validTrue={validTrue}
                     setValidTrue={setValidTrue}
                     validFalse={validFalse}
                     checkAnswer={() => checkAnswer()}
                     i={3}
                  />
                  <VariableAnswers
                     ABC={"D"}
                     answers={answers[3]}
                     answer={question.answer}
                     valid={valid}
                     setValid={setValid}
                     validTrue={validTrue}
                     setValidTrue={setValidTrue}
                     validFalse={validFalse}
                     checkAnswer={() => checkAnswer()}
                     i={4}
                  />
               </div>
               <div className={index.flexBtn}>
                  <input
                     type="button"
                     className={index.btn + " " + transition.bacColorColor}
                     value="<<"
                     onClick={() => backToChouse()}
                  />
                  {ctx < 10 ? (
                     <input
                        type="button"
                        className={index.btn + " " + transition.bacColorColor}
                        value=">"
                        onClick={() => nextQuestion()}
                     />
                  ) : (
                     <input
                        type="button"
                        className={index.btn + " " + transition.bacColorColor}
                        value="end"
                        onClick={() => Router.push("/chouseRegion/Result")}
                     />
                  )}
               </div>
            </section>
         </Layout>
      </>
   );
};

Id.getInitialProps = async (ctx) => {
   const res = await fetch("http://localhost:4200/questions/" + ctx.query.id);
   const json = await res.json();
   return { question: json, ctx: ctx.query.id };
};

export default Id;
