/* eslint-disable react-hooks/exhaustive-deps */
import { useActions } from "../hooks/useAction";
import Router from "next/router";

import Layout from "../Components/Layout/Layout";
import index from "./css/index.module.css";
import transition from "../../styles/transition.module.css";
import { quizSlice } from "../../untils/redux/slice/quizSlice";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { quizSelector, interfaceSelector } from "../../untils/selectors";
import sampleQuiz from "../../untils/createSampleQuiz/sampleQuiz";
import { interfaceSlice } from "../../untils/redux/slice/interfaceSlice";

const Quiz = () => {
   const slice = useActions(quizSlice.actions);
   const sliceInterface = useActions(interfaceSlice.actions);
   const quiz = useSelector(quizSelector);
   const interfaceSelect = useSelector(interfaceSelector);

   const question = [];

   useEffect(() => {
      if (quiz.data.length > 0) {
         for (let i = 0; i < 10; i++) {
            const tmp = question;
            question = sampleQuiz(quiz.data);
            question = tmp.concat(question);
         }
         slice.writeQuestion(question);
      }
   }, [quiz.data.length]);

   const load = () => {
      Router.push("/chouseRegion/Quiz");
   };

   const chouseRegion = (region) => {
      switch (region) {
         case "Americas":
            slice.readData("Americas");
            sliceInterface.loading(true);
            setTimeout(load, 900);
            break;
         case "Africa":
            slice.readData("Africa");
            sliceInterface.loading(true);
            setTimeout(load, 900);
            break;
         case "Asia":
            slice.readData("Asia");
            sliceInterface.loading(true);
            setTimeout(load, 900);
            break;
         case "Europe":
            slice.readData("Europe");
            sliceInterface.loading(true);
            setTimeout(load, 900);
            break;
         case "Oceania":
            slice.readData("Oceania");
            sliceInterface.loading(true);
            setTimeout(load, 900);
            break;
      }
   };

   return (
      <Layout>
         {interfaceSelect.loading === false ? (
            <>
               <h1 className={index.title}>COUNTRY QUIZ</h1>
               <div className={index.img}></div>
               <section className={index.body + " " + index.flex}>
                  <p className={index.chouseRegion}>chouse region for quiz</p>
                  <div
                     className={index.flex}
                     onClick={() => chouseRegion("Americas")}
                  >
                     <div className={index.chouse}>
                        <p className={index.answer + " " + transition.bacColor}>
                           Americas
                        </p>
                     </div>
                     <div
                        className={index.chouse}
                        onClick={() => chouseRegion("Africa")}
                     >
                        <p className={index.answer + " " + transition.bacColor}>
                           Africa
                        </p>
                     </div>
                     <div
                        className={index.chouse}
                        onClick={() => chouseRegion("Asia")}
                     >
                        <p className={index.answer + " " + transition.bacColor}>
                           Asia
                        </p>
                     </div>
                     <div
                        className={index.chouse}
                        onClick={() => chouseRegion("Europe")}
                     >
                        <p className={index.answer + " " + transition.bacColor}>
                           Europe
                        </p>
                     </div>
                     <div
                        className={index.chouse}
                        onClick={() => chouseRegion("Oceania")}
                     >
                        <p className={index.answer + " " + transition.bacColor}>
                           Oceania
                        </p>
                     </div>
                  </div>
                  <input
                     type="button"
                     className={index.btn + " " + transition.bacColorColor}
                     value="<<"
                     onClick={() => Router.push("/")}
                  />
               </section>
            </>
         ) : (
            <svg className={index.spinner} viewBox="0 0 50 50">
               <circle
                  className={index.path}
                  cx="25"
                  cy="25"
                  r="20"
                  fill="none"
                  strokeWidth="5"
               ></circle>
            </svg>
         )}
      </Layout>
   );
};

export default Quiz;
