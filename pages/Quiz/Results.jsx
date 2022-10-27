import Router from "next/router";
import Layout from "../Components/Layout/Layout";
import index from "../chouseRegion/css/index.module.css";
import transition from "../../styles/transition.module.css";
import { useSelector } from "react-redux";
import { quizCountSelector } from "../../untils/selectors";
import { useEffect } from "react";
import { useActions } from "../hooks/useAction";
import { quizSlice } from "../../untils/redux/slice/quizSlice";

const Result = () => {
   const count = useSelector(quizCountSelector);
   const sliceQuiz = useActions(quizSlice.actions);

   useEffect(() => {
      sliceQuiz.deleteQuestion();
   }, []);

   return (
      <Layout>
         <h1 className={index.title}>COUNTRY QUIZ</h1>
         <section className={index.body + " " + index.flex}>
            <div className={index.resultsImg}></div>
            <p className={index.results}>Results</p>
            <div className={index.congratulation}>
               <p className={index.congratulationText}>You got</p>
               <p className={index.total}>{count}</p>
               <p className={index.congratulationText}>correct answers</p>
            </div>
            <input
               type="button"
               className={index.btnResults + " " + transition.bacColorColor}
               value="Try Again"
               onClick={() => Router.push("/")}
            />
         </section>
      </Layout>
   );
};

export default Result;
