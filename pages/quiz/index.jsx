import { useActions } from "../hooks/useAction";

import Router from "next/router";
import Layout from "../Components/Layout/Layout";
import index from "./index.module.css";
import transition from "../../styles/transition.module.css";
import { quizSlice } from "../../untils/redux/slice/quizSlice";
import { useSelector } from "react-redux";

const Quiz = () => {
   const slice = useActions(quizSlice.actions);

   return (
      <Layout>
         <h1 className={index.title}>COUNTRY QUIZ</h1>
         <div className={index.img}></div>
         <section className={index.body + " " + index.flex}>
            <p className={index.question}>Выбери регион для quiz</p>
            <div className={index.flex}>
               <p
                  className={index.chouse + " " + transition.bacColor}
                  onClick={() => slice.readData("Americas")}
               >
                  Americas
               </p>
               <p
                  className={index.chouse + " " + transition.bacColor}
                  onClick={() => slice.readData("Africa")}
               >
                  Africa
               </p>
               <p
                  className={index.chouse + " " + transition.bacColor}
                  onClick={() => slice.readData("Asia")}
               >
                  Asia
               </p>
               <p
                  className={index.chouse + " " + transition.bacColor}
                  onClick={() => slice.readData("Europe")}
               >
                  Europe
               </p>
               <p
                  className={index.chouse + " " + transition.bacColor}
                  onClick={() => slice.readData("Oceania")}
               >
                  Oceania
               </p>
            </div>
            <input
               type="button"
               className={index.btn + " " + transition.bacColorColor}
               value="<<"
               onClick={() => Router.push("/")}
            />
         </section>
      </Layout>
   );
};

export default Quiz;
