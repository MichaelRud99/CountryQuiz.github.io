/* eslint-disable react-hooks/exhaustive-deps */
import { useSelector } from "react-redux";
import Router from "next/router";
import Layout from "../Components/Layout/Layout";
import index from "./css/index.module.css";
import transition from "../../styles/transition.module.css";
import { questionSelector, interfaceSelector } from "../../untils/selectors";
import { useEffect } from "react";
import { useActions } from "../hooks/useAction";
import { interfaceSlice } from "../../untils/redux/slice/interfaceSlice";
import Image from "next/image";
import enumeration from "../../untils/createSampleQuiz/enumeration";

const Quiz = () => {
   let question = useSelector(questionSelector);
   const interfaceSelect = useSelector(interfaceSelector);
   const sliceInterface = useActions(interfaceSlice.actions);
   let i = 0;
   const tmp = question[i].variableAnswer;
   let variableAnswer = enumeration([tmp[0], tmp[1], tmp[2], tmp[3]]);

   useEffect(() => {
      sliceInterface.loading(false);
   }, []);

   const backToChouse = () => {
      Router.push("/chouseRegion");
   };
   return (
      <>
         <Layout>
            <h1 className={index.title}>COUNTRY QUIZ</h1>
            <div className={index.img}></div>
            <section className={index.body + " " + index.flex}>
               <div className={index.flag}>
                  <Image
                     src={question[i].flag}
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
                     <p className={index.answer}>{variableAnswer[0]}</p>
                  </div>

                  <div className={index.chouse + " " + transition.bacColor}>
                     <p className={index.variableAnswer}>B</p>
                     <p className={index.answer}>{variableAnswer[1]}</p>
                  </div>
                  <div className={index.chouse + " " + transition.bacColor}>
                     <p className={index.variableAnswer}>C</p>
                     <p className={index.answer}>{variableAnswer[2]}</p>
                  </div>
                  <div className={index.chouse + " " + transition.bacColor}>
                     <p className={index.variableAnswer}>D</p>
                     <p className={index.answer}>{variableAnswer[3]}</p>
                  </div>
               </div>
               <input
                  type="button"
                  className={index.btn + " " + transition.bacColorColor}
                  value="<<"
                  onClick={() => backToChouse()}
               />
            </section>
         </Layout>
      </>
   );
};

export default Quiz;
