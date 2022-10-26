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

const Id = ({ question, ctx }) => {
   ctx = ctx * 1;
   const questionArr = question.variableAnswer.split(",");
   const slice = useActions(interfaceSlice.actions);
   const sliceQuiz = useActions(quizSlice.actions);
   const [va, setVa] = useState(false);
   useEffect(() => {
      setVa(true);
      slice.loading(false);
   }, []);

   if (!va) {
      let variableAnswer = enumeration([
         questionArr[0],
         questionArr[1],
         questionArr[2],
         questionArr[3],
      ]);
      console.log("NEW", variableAnswer);
      console.log("BASE", questionArr);
   }

   const backToChouse = () => {
      Router.push("/");
      sliceQuiz.deleteQuestion();
   };

   const nextQuestion = () => {
      ctx++;
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
                  <div className={index.chouse + " " + transition.bacColor}>
                     <p className={index.variableAnswer}>A</p>
                     <p className={index.answer}>{questionArr[0]}</p>
                  </div>

                  <div className={index.chouse + " " + transition.bacColor}>
                     <p className={index.variableAnswer}>B</p>
                     <p className={index.answer}>{questionArr[1]}</p>
                  </div>
                  <div className={index.chouse + " " + transition.bacColor}>
                     <p className={index.variableAnswer}>C</p>
                     <p className={index.answer}>{questionArr[2]}</p>
                  </div>
                  <div className={index.chouse + " " + transition.bacColor}>
                     <p className={index.variableAnswer}>D</p>
                     <p className={index.answer}>{questionArr[3]}</p>
                  </div>
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
