/* eslint-disable react-hooks/exhaustive-deps */
import Layout from "../Components/Layout/Layout";
import index from "./css/index.module.css";
import transition from "../../styles/transition.module.css";
import Regions from "../Components/Regions";
import { useSelector } from "react-redux";
import { interfaceSelector } from "../../untils/selectors";
import { useEffect } from "react";
import { useActions } from "../hooks/useAction";
import { quizSlice } from "../../untils/redux/slice/quizSlice";
import { quizSelector } from "../../untils/selectors";
import sampleQuiz from "../../untils/createSampleQuiz/sampleQuiz";

const Index = () => {
   const interfaceSelect = useSelector(interfaceSelector);
   const slice = useActions(quizSlice.actions);
   const quiz = useSelector(quizSelector);
   const question = [],
      questions = [];

   useEffect(() => {
      if (quiz.data.length > 0) {
         for (let i = 0; i < 10; i++) {
            const tmp = questions;
            question = sampleQuiz(quiz.data);
            questions = question;
            questions = tmp.concat(question);
            slice.writeQuestion(question);
         }
      }
   }, [quiz.data.length]);

   return (
      <Layout>
         {interfaceSelect.loading === false ? (
            <>
               <h1 className={index.title}>COUNTRY QUIZ</h1>
               <div className={index.img}></div>
               <section className={index.body + " " + index.flex}>
                  <p className={index.chouseRegion}>chouse region for quiz</p>
                  <div className={index.flex}>
                     <Regions region={"Americas"} />
                     <Regions region={"Africa"} />
                     <Regions region={"Asia"} />
                     <Regions region={"Europe"} />
                     <Regions region={"Oceania"} />
                  </div>
                  <input
                     type="button"
                     className={
                        index.btn +
                        " " +
                        transition.bacColorColor +
                        " " +
                        index.flexBtn
                     }
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

export default Index;
